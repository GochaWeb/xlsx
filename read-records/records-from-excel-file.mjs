'use strict';

import _ from 'lodash';
import is from 'is';
import xlsx from 'xlsx';

import gssLanguage from '@gss-llc/gss-language.gss.ge';
import '@gss-llc/gss-common.gss.ge';

const unknownLanguageSignification = '--';

const arrify = value => {
    if (value === null || value === undefined) {
        return [];
    }

    if (Array.isArray(value)) {
        return value;
    }

    if (typeof value === 'string') {
        return [value];
    }

    if (typeof value[Symbol.iterator] === 'function') {
        return [...value];
    }

    return [value];
};

const sendErrorEMail = (req, res, next, sender, subject, message) => {
    console.log('--- sendErrorEMail');
    console.log(message);
}

// აბრუნებს ექსელის ჩანაწერების მასივს ან შეცდომის შემთხვევაში აგზავნის შესაბამის მეილს და აბრუნებს undefined
export default (req, res, next, excelPath, sheetNames, recordDescriptionByFields, language, errorMailSender, errorMailSubject) => {
    const getColumnsMlHeadersObjectsByLanguage = (columnsMlHeaders) => {
        // მიღებული columnsMlHeaders-იდან მიიღება columnsMlHeadersObjects ml ობიექტების მასივი
        let columnsMlHeadersObjects = [];
        // allLanguageColumnsHeaders - ის დასახელებები რომლებიც არ მოიძებნა ენებში
        let allLanguageColumnsHeaders = [];

        columnsMlHeaders.forEach(columnMlHeaders => {
            const
                columnMlHeadersObjects = [],
                allLanguageColumnHeaders = [];

            arrify(columnMlHeaders).map(columnMlHeader => {
                // აქ ვამოწმებთ თუ columnMlHeader სტრიქონია, მაშინ ვიღებთ შესაბამის gssLanguage.mlStrings - დან შესაბამის ობიექტს
                // ხოლო columnMlHeader სტრიქონი თუ არაა მაშინ ობიექტია და ვიღებს ამ ობიექტს
                const columnMlHeaderObject = is.string(columnMlHeader) ? gssLanguage.mlStrings[columnMlHeader] : columnMlHeader;

                if (columnMlHeaderObject) {
                    columnMlHeadersObjects.push(columnMlHeaderObject);
                } else {
                    allLanguageColumnHeaders.push(columnMlHeader);
                }
            });

            columnsMlHeadersObjects.push(columnMlHeadersObjects);
            allLanguageColumnsHeaders.push(allLanguageColumnHeaders);
        });

        const
            // columnsMlHeadersObjects- ობიექტებიდან ვიღე კეიებს და ვაბრუნებ მასივის მასივად. ვიღებ უნიკალურს
            uniqLanguages = _.intersection(..._.flattenDeep(columnsMlHeadersObjects).map(columnMlHeadersObject => Object.keys(columnMlHeadersObject))),

            // მიღებული columnsMlHeaders-იდან ენების მიხედვით იქმნება Headers-ები
            columnsMlHeadersObjectsByLanguage = {};

        if (uniqLanguages.length) {
            uniqLanguages.forEach(language => {
                columnsMlHeadersObjectsByLanguage[language] = columnsMlHeadersObjects.map((columnMlHeadersObjects, index) => {
                    return columnMlHeadersObjects.map(columnMlHeadersObject => columnMlHeadersObject[language])
                        .concat(allLanguageColumnsHeaders[index])
                });
            });
        } else {
            uniqLanguages.push(unknownLanguageSignification);
            columnsMlHeadersObjectsByLanguage[unknownLanguageSignification] = allLanguageColumnsHeaders;
        }

        return {columnsMlHeadersObjectsByLanguage, uniqLanguages};
    }

    /**
     * Returns the raw index of the header in the given sheet that matches the provided ml headers.
     *
     * @param {{name: string, sheet: Object}} sheetInfo -  The sheet information object.
     * @param {Array<Array|string>} columnsMlHeaders - The ml headers to match against the sheet headers.
     *
     * @returns {undefined|{ lHeaders: Array<string>, rawIndex: number, language: undefined|string }} - The found headers by one language and the raw index.
     */
    const getLHeadersRawInfo = (sheetInfo, columnsMlHeaders) => {
        const
            sheet = sheetInfo.sheet,
            sheet_ref = sheet['!ref'];

        if (!sheet_ref) {
            sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, String.format(gssLanguage.lString(gssLanguage.mlStrings.inSheetRecordsNotFound, {language: language}), [sheetInfo.name]));
            return;
        }

        const recordsStartRawIndex = xlsx.utils.decode_range(sheet_ref).s.r;
        if (!columnsMlHeaders.length) {
            return {
                lHeaders: [],
                language: undefined,
                rawIndex: recordsStartRawIndex + 1
            };
        }

        const {columnsMlHeadersObjectsByLanguage, uniqLanguages}
            = getColumnsMlHeadersObjectsByLanguage(columnsMlHeaders);

        // ვიღებ ექსელის რეკორდებს
        const excelRecords = xlsx.utils.sheet_to_json(sheet, {
            raw: false,
            blankrows: false,
            header: 1,
            defval: '',
            range: sheet_ref
        });

        const result = {lHeaders: [], rawIndex: recordsStartRawIndex, language: undefined};
        if (excelRecords.some((rawValues, rawIndex) => {
            if (uniqLanguages.some(language => {
                let copyColumnsMlHeadersByLanguage = columnsMlHeadersObjectsByLanguage[language].slice();
                return rawValues.some(value => {
                    copyColumnsMlHeadersByLanguage.some((columnMlHeadersByLanguage, index) => {
                        if (columnMlHeadersByLanguage.includes(value)) {
                            result.lHeaders.push(value);

                            copyColumnsMlHeadersByLanguage.splice(index, 1);

                            return true;
                        }
                    });

                    if (!copyColumnsMlHeadersByLanguage.length) {
                        result.language = language;
                        return true;
                    }
                });
            })) {
                result.rawIndex = recordsStartRawIndex + rawIndex + 1;

                return true;
            }
        })) {
            return result;
        }

        const columnsNamesByLanguages = uniqLanguages.map(language =>
            `${language}:  ${columnsMlHeadersObjectsByLanguage[language].map(columnMlHeadersByLanguage => `[${columnMlHeadersByLanguage.join(',')}]`).join(' ')}`
        ).join('\n');
        sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, String.format(gssLanguage.lString(gssLanguage.mlStrings.excelSheetHasNoData, {language: language}), [sheetInfo.name, columnsNamesByLanguages]));
    }

    language = language || 'en';
    const excelWorkbook = xlsx.readFile(excelPath);
    // sheetNames - გადმოცემული შიტის დასახელებებიდან მხოლოდ ერთი დასახელების შიტი უნდა მოიძებნოს
    let sheets = [];
    sheetNames.forEach(sheetName => {
        const sheet = excelWorkbook.Sheets[sheetName];
        if (sheet) {
            sheets.push({name: sheetName, sheet})
        }
    });

    if (sheets.length === 0) {
        sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, String.format(gssLanguage.lString(gssLanguage.mlStrings.excelCanNotFindSheet, {language: language}), [`'${sheetNames.join('\', \'')}'`]));
        return;
    }

    if (sheets.length > 1) {
        sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, String.format(gssLanguage.lString(gssLanguage.mlStrings.excelOneSheetRequired, {language: language}), [sheetNames.join(` ${gssLanguage.lString(gssLanguage.mlStrings['or'], {language: language})} `)]));
        return;
    }

    const sheet = sheets[0].sheet;
    //ამ შემთხვევაში ვეძახი უბრალოდ ეს კოდი ამოვარდება აქედან რადგან გადმოეცემა
    const
        recordDescriptionByFieldsKeys = Object.keys(recordDescriptionByFields),

        lHeadersRawInfo =
            getLHeadersRawInfo(sheets[0],
                recordDescriptionByFieldsKeys.filter(key => recordDescriptionByFields[key].required === true)
                    .map(key => recordDescriptionByFields[key].mlHeader));

    if (!lHeadersRawInfo) {
        // შეცდომის მეილი უკვე გაგზავნილი იქნება
        return;
    }

    let records = [],
        nonAccessibleRecords = [];

    const
        {columnsMlHeadersObjectsByLanguage}
            = getColumnsMlHeadersObjectsByLanguage(recordDescriptionByFieldsKeys
            .map(key => recordDescriptionByFields[key].mlHeader)),

        // აქ მოყვალინილი ფუნქციისთვის ლოდაშის ტესტი:
        //  objects = {ka: [1,2], en: [1,2,3]}
        //  _.maxBy(Object.keys(objects), function(k) { return objects[k].length; });
        //  => 'en'
        detectedLanguage = lHeadersRawInfo.language ||
            _.maxBy(Object.keys(columnsMlHeadersObjectsByLanguage), language => columnsMlHeadersObjectsByLanguage[language].length);

    const excelHeaders = xlsx.utils.sheet_to_json(sheet, {
        raw: false,
        header: 1,
        defval: '',
        range: `A${lHeadersRawInfo.rawIndex + 1}:ZZ${lHeadersRawInfo.rawIndex + 1}`
    })[0];
    const excelRecords = xlsx.utils.sheet_to_json(sheet, {
        raw: false,
        blankrows: '**',
        defval: '',
        range: lHeadersRawInfo.rawIndex + 1
    });

    // excelHeaderByFieldKey ობიექტში ვაყალიბებთ ჩანაწერის ფილდის დასახელებას თუ რომელი არსებული სვეტის დასახელება შეესაბამება
    const
        foundLHeaders = [],
        excelHeaderByFieldKey = {};

    columnsMlHeadersObjectsByLanguage[detectedLanguage]
        .forEach((lHeaders, lHeadersIndex) =>
            lHeaders.some(lHeader => {
                if (foundLHeaders.includes(lHeader)) {
                   return false;
                }

                if (lHeadersRawInfo.lHeaders.includes(lHeader)) {
                    foundLHeaders.push(lHeader);
                    // !!! მნიშვნელოვანია !!!
                    // getColumnsMlHeadersObjectsByLanguage ფუნქცია თითოეული ენისთვის
                    // აბრუნებს recordDescriptionByFields შესაბამისი სიგრძის მასივს
                    excelHeaderByFieldKey[lHeader] = recordDescriptionByFieldsKeys[lHeadersIndex];
                    return true;
                }
            }));

    columnsMlHeadersObjectsByLanguage[detectedLanguage]
        .forEach((lHeaders, lHeadersIndex) =>
            lHeaders.some(lHeader => {
                if (foundLHeaders.includes(lHeader)) {
                    return false;
                }

                foundLHeaders.push(lHeader);
                excelHeaderByFieldKey[lHeader] = recordDescriptionByFieldsKeys[lHeadersIndex];
                return true;
            }));

    excelRecords.forEach((excelRecord, lineIndex) => {
        if (is.empty(excelRecord))
            return;

        let record = {};

        // ექსელის ანაწერიდან ვქმნით ჩანაწერს - record

        Object.keys(excelRecord).forEach((key) => {
            const fieldKey = recordFieldsByLHeaders[key];
            if (fieldKey) {
                record[fieldKey] = excelRecord[key];
            }
        });

        // ვამოწმებთ ჩანაწერის record სისწორეს და ვქმნით
        // nonAccessibleRecord - ცუდი ჩანაწერების მასივს
        let nonAccessibleRecordFound = false;
        let nonAccessibleRecord = {requiredHeader: []};

        Object.keys(recordDescriptionByFields).forEach(key => {
            const fieldOption = recordDescriptionByFields[key];
            // ჩანაწერის აღწერაში მითითებული ფილდის შესაბამის ექსელის სვეტში
            // ამ შექმნილი ჩანაწერისთვის record მნიშვნელობა თუ არაა შეტანილი
            if (excelHeaderByFieldKey.hasOwnProperty(key) && (!record[key] || record[key].toString().trim() === '')) {
                // ეს მნიშვნელობა თუ აუცილებელია ამ ჩანაწერს/record ვთვლით ცუდ ჩანაწერად

                if (fieldOption.required) {
                    nonAccessibleRecordFound = true;

                    nonAccessibleRecord.excelRecord = excelRecord;
                    nonAccessibleRecord.requiredHeader.push(excelHeaderByFieldKey[key] || key);
                    nonAccessibleRecord.line = lineIndex + xlsx.utils.decode_range(rangeForExcelRecords.split(':')[0]).s.r + 2;

                    return;
                }

                // თუ აუცილებელი არაა მის მნიშვნელობად ვიღებ ჩანაწერის აღწერაში გადმოცემულ დეფოლტ/მნიშვნელობას
                record[key] = fieldOption.defaultValue;
            }
        });

        // თუ ჩანაწერი/record ცუდი ჩანაწერია ვამატებთ ცუდ ჩანაწერებში
        if (nonAccessibleRecordFound) {
            nonAccessibleRecords.push(nonAccessibleRecord);
            return;
        }

        // თუ ჩანაწერი/record კარგი ჩანაწერია ვამატებთ დასაბრუნებელ ჩანაწერებში
        records.push(record);
    });


    // თუ ცუდი ჩანაწერები მოიძებნა ვაგზავნი მეილს და არაფერს არ ვაბრუნებ
    if (nonAccessibleRecords.length > 0) {
        let lineText = gssLanguage.lString(gssLanguage.mlStrings['line'], {language: language}).toLowerCase();

        console.log('ექსელის ფაილში ამ სვეტების მნიშვნელობები არ არის მითითებული')
        console.log(nonAccessibleRecords.map(nonAccessibleRecord => nonAccessibleRecord.requiredHeader.join(', ')));
        console.log(lineText)
        console.log(nonAccessibleRecords.map(nonAccessibleRecord => nonAccessibleRecord.line));
        // sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, gssLanguage.lString(gssLanguage.mlStrings['importGoodsExcelNonAccessibleRecords'], {language: language})
        //     + '\n'
        //     + String.format('<table style="margin: 0;">{0}</table>', [
        //         nonAccessibleRecords.map(nonAccessibleRecord =>
        //             String.format('<tr><td style="border-bottom: 1px solid #d0d0d0; padding: 3px;">{0} - {1}</td><td style="border-bottom: 1px solid #d0d0d0; padding: 3px;">{2}</td></tr>', [
        //                 nonAccessibleRecord.requiredHeader.join(', '),
        //                 lineText,
        //                 nonAccessibleRecord.line
        //             ])
        //         ).join('\n')
        //     ]));

        return;
    }

    return records;
};

// getRecordFieldsByLHeaders-ფუნქციით უნდა მივიღოთ ობიექტი სადაც ენების მიხევით
// ჩანაწერის LHeaders-ებს შეესაბამება შესაბამისი field-ების
// მაგალითად:
// - გვაქვს ჩანაწერის ფილდები: {*name, *money, debit, credit} (* აღნიშნავს Required-ს)
// - გადმოცემული mlHeader-ები ენების შესაბამისად გარდაიქმნა
//        ka: [[სახელი, დასახელება], [თანხა], [დებეტი, დებეტური ანგარიში], []]
//        ru: [[Название, Имя], [Деньги], [Дебет], [Кредит]]
//        en: [[name], [money, amount], [debit], [credit]]
// - getRecordFieldsByLHeaders - უნდა დააბრუნოს
// {
//  ka: {
//          სახელი: name
//          დასახელება: name
//          თანხა: money
//          დებეტი: debit
//          'დებეტური ანგარიში': debit
//      }
//  ru: {
//          Название: name
//          Имя: name
//          Деньги: money
//          Дебет: debit
//          Кредит: credit
//      }
//  en: {
//          name: name
//          money: money
//          amount: money
//          debit: debit
//          credit: credit
//      }
// }
//
// getLHeaderRawInfo - დან მიღებულ შედეგში მნიშვნელოვანია დაბრუნებული ენა
//  თუ ენა მაქვს ესეიგი დაბრუებული სათაურების სტრიქონში არა Required ფილდების სათაურებიც უნდა მოიძებნოს ამ ენაძე
//  და სხვა ენებზე იგნორი უნდა გაუკეთდეთ
//
//  მაგ ეს მნიშვნელოვანიას შეგვიძლია განვმარტოთ შემდეგნაირად:
//      - ჩვენს შემთხვევაში: ჩანაწერის ფილდებითვის: {*name, *money, debit, credit}
//        გადმოცემული mlHeader-ები ენების შესაბამისად გარდაიქმნა
//        ka: [[სახელი, დასახელება], [თანხა]]
//        ru: [[Название, Имя], [Деньги]]
//        en: [[name], [money, amount]]
//      - getLHeaderRawInfo - დაგვიბრუნა:
//          - ენას ka და ფილდების lHeaders
//          - [სახელი, თანხა] და
//          - სგრიქონის ინდექსი სადაც ეს lHeader-ები იპოვა
//      - არა Required {debit, credit} ფილდებისთვის გადმოცემული mlHeader-ები ენების შესაბამისად გარდაიქმნა:
//        ka: [[დებეტი, დებეტური ანგარიში], []]
//        ru: [[Дебет], [Кредит]]
//        en: [[debit], [credit]]
//      - getLHeaderRawInfo-ს დაბრუნებულ სგრიქონში მოვძებნით მხოლოდ 'დებეტი' ან 'დებეტური ანგარიში' lHeader-ს
//        და ფილდისთვის credit-ისთვის არაფერს რადგან მას ქართული ენის დასახელაბა არ გააჩნია თუმცა შესაძლებელია ამ სტრიქონში
//        მოიძებნოს Кредит ან credit უჯრ(ებ)ა რომლის ქვემოთაც იქნება რაღაც მნიშვნელობები
//
// getRecordFieldsByLHeaders დაბრუნებულ ენების მიხედვით getLHeaderRawInfo მიერ დაბრუნებულ სტრიქონში უნდა მოვძებნოთ სტრიქონში lHeader-ები
// და ენების მიხედვით შევქმნათ შესაბამისი ობიექტი: foundedLHeadersByFields
// ამ ობიექტში ეგრევე ყველა ენა იქნება საჭირო თუ getLHeaderRawInfo ენა არ დააბრუნა, თუ დააბრუნა ეს ობიექტი მხოლდ ამ ენაზე იქნება საჭირო
//
//  მაგ:
//      თუ getLHeaderRawInfo-ს მიერ დაბრუნებული სტრიქონი შედება შემდეგი ჩანაწერებისაგან:
//
//  დასახელება	სახელი	თანხა	დებეტი	Деньги	Дебет	Кредит	name	money	debit	credit	ვალუტა
//
//
// თუ getLHeaderRawInfo ენა დააბრუნა პირაპირ ეს ობიექტი foundedLHeadersByFields (ჩანაწერების აღწერა) და ინიციალიზირდება დაბრუნებული lHeaders-ებით: ჩვენს შემთხვევაში:
// {
//      ka: {
//          name: სახელი
//          money: თანხა
//          }
// }
// getLHeaderRawInfo არ აბრუნებს მაგ ობიექტს აბრუნებს
//   -  getLHeaderRawInfo :
//      {
//          lHeaders :
//         [
//              სახელი
//              თანხა
//          ],
//          rawIndex : raw,
//          language : 'ka'
//       }
//   როგორც მივხვდი უნდა დააბრუნოს ესე
//   -  getLHeaderRawInfo :
//      {
//          foundedLHeadersByFields : {ka: {name:სახელი,money:თანხა}},
//          rawIndex : raw,
//       }
//
//  (გადასაკეთებელია ეგეთ ობიექტი რომ დააბრუნოს უკვე) ანუ foundedLHeadersByFields, რომ დააბრუნოს
//  ეს იმიტომ დავაწერე რომ ალგორითმში გვიწერია ასე რომ getLHeaderRawInfo - გამოძახების შემდეგ ეს ობიექტი foundedLHeadersByFields შევსებულია,
//  მაგრამ ეს ობიექტი შევსებული  არაა რეალურად ამ ჟამინდელი სიტვაციით და ჯერ getLHeaderRawInfo მიერ დაბრუნებული ინფორმაციით
//  უნდ შევავსო და მერე getRecordFieldsByLHeaders - ის დაბრუნებული ინფორმაციით

// და მხოლოდ სხვა ფილდებისთვის მოხდება getRecordFieldsByLHeaders-ით დაბრუნებული ენის შესაბამისი ობიექტის lHeader-ები მოძებნა
// ჩვენს მაგალითში შესაქმნელი foundedLHeadersByFields (ჩანაწერების აღწერა) ვიღებთ
// {
//      ka: {
//          name: სახელი
//          money: თანხა
//          debit: დებეტი
//          }
// }
//
// თუ getLHeaderRawInfo ენა არ დააბრუნა
// ყველა ენისთვის უნდა მივიღოთ foundedLHeadersByFields (ჩანაწერების აღწერა) ობიექტი
// {
//      ka: {
//          name: სახელი
//          money: თანხა
//          debit: დებეტი
//          }
//      ru: {
//          money: Деньги
//          debit: Дебет
//          credit: Кредит
//          }
//      en: {
//          name: name
//          money: money
//          debit: debit
//          credit: credit
//          }
// }
// ამ დროს შესაქმნელი foundedLHeadersByFields (ჩანაწერების აღწერა) ვიღებთ იმ foundedLHeadersByFields ობიექტს რომელსაც ყველაზე მეტი key ანუ field-ის lHeader ექნება ნაპოვნი
// ჩვენს მაგალითში მოხდება
//      en: {
//          name: name
//          money: money
//          debit: debit
//          credit: credit
//          }
//
// შესაქმნელი foundedLHeadersByFields (ჩანაწერების აღწერა) მიიღება შემდეგი ალგორითმით:
// getLHeaderRawInfo-ს მიერ დაბრუნებული სტრიქონიში ვეძებ საჭირო lHeader-ს პოვნის შემთხვევაში ვიღებ
// შესაბამისი ენის მიხედვით შესაბამის ფილდს getRecordFieldsByLHeaders-ით დაბრუნებულ ობიექტში
// ეს ფილდი თუ არა აქვს შექმნის პროცესში არსებულ foundedLHeadersByFields-ობიექტს ვამატებ ინააღმდეგ შემთვევაში ვიკიდებ
