'use strict';

import _ from 'lodash';
import is from 'is';
import xlsx from 'xlsx';

import gssLanguage from '@gss-llc/gss-language.gss.ge';
import '@gss-llc/gss-common.gss.ge';

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
    /**
     * Retrieves all headers for a given record description.
     *
     * @param {object} recordDescriptionByFields - The description of the record, with fields as keys and property descriptions as values.
     * @param {string} language - The language code for the desired language of the headers. Optional, default is null.
     *
     * @returns {object} - An object containing the record headers as keys and their corresponding field keys as values.
     */
        // todo: ენების მიხედვით მიხედვით უნდა დააბრუნოს {ka: [ყველა სათაური], }

    const getRecordFieldsByLHeaders = (recordDescriptionByFields, language) => {
            let allLanguageHeaders = {};
            let recordHeadersByLanguage = {}
            Object.keys(recordDescriptionByFields).forEach(key => {
                arrify(recordDescriptionByFields[key].mlHeader).forEach(header => {
                    // აქ ვამოწმებთ თუ header სტრიქონია, მაშინ ვიღებთ შესაბამის gssLanguage.mlStrings - დან შესაბამის ობიექტს
                    // ხოლო header სტრიქონი თუ არაა მაშინ ობიექტია და ვიღებს ამ ობიექტს
                    let mlHeader = is.string(header) ? gssLanguage.mlStrings[header] : header;
                    if (!mlHeader) {
                        allLanguageHeaders[header] = key
                        return;
                    }
                    if (language) {
                        if (!recordHeadersByLanguage[language]) {
                            recordHeadersByLanguage[language] = {};
                        }
                        recordHeadersByLanguage[language][mlHeader[language].toLowerCase()] = key;
                    } else {
                        Object.keys(mlHeader).forEach(lang => {
                            if (!recordHeadersByLanguage[lang]) {
                                recordHeadersByLanguage[lang] = {};
                            }
                            recordHeadersByLanguage[lang][mlHeader[lang].toLowerCase()] = key;
                        });
                    }
                });
            });
            Object.keys(recordHeadersByLanguage).forEach(language => {
                recordHeadersByLanguage[language] = Object.assign({}, recordHeadersByLanguage[language], allLanguageHeaders);
            })
            return recordHeadersByLanguage;
        };


    /**
     * Returns the raw index of the header in the given sheet that matches the provided ml headers.
     *
     * @param {{name: string, sheet: Object}} sheetInfo -  The sheet information object.
     * @param {Array<Array|string>} columnsMlHeaders - The ml headers to match against the sheet headers.
     *
     * @returns {undefined|{ lHeaders: Array<string>, rawIndex: number, language: undefined|string }} - The found headers by one language and the raw index.
     */
    const getLHeaderRawInfo = (sheetInfo, columnsMlHeaders) => {
        const
            sheet = sheetInfo.sheet,
            sheet_ref = sheet['!ref'];

        if (!sheet_ref) {
            sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, String.format(gssLanguage.lString(gssLanguage.mlStrings.inSheetRecordsNotFound, {language: language}), [sheetInfo.name]));
            return;
        }

        const recordsStartRawIndex = xlsx.utils.decode_range(sheet_ref).s.r + 1;
        
        if (!columnsMlHeaders.length) {
            return {
                lHeaders: [],
                language: undefined,
                rawIndex: recordsStartRawIndex + 1
            };
        }

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

        // columnsMlHeadersObjects- ობიექტებიდან ვიღე კეიებს და ვაბრუნებ მასივის მასივად. ვიღებ უნიკალურს
        const uniqLanguages = _.intersection(..._.flattenDeep(columnsMlHeadersObjects).map(columnMlHeadersObject => Object.keys(columnMlHeadersObject)));

        // მიღებული columnsMlHeaders-იდან ენების მიხედვით იქმნება Headers-ები
        let columnsMlHeadersObjectsByLanguage = {};

        uniqLanguages.forEach(language => {
            columnsMlHeadersObjectsByLanguage[language] = columnsMlHeadersObjects.map((columnMlHeadersObjects, index) => {
                return columnMlHeadersObjects.map(columnMlHeadersObject => columnMlHeadersObject[language])
                    .concat(allLanguageColumnsHeaders[index])
            });
        });
        // ვიღებ ექსელის რეკორდებს
        const excelRecords = xlsx.utils.sheet_to_json(sheet, {
            raw: false,
            blankrows: false,
            header: 1,
            defval: '',
            range: sheet_ref
        });

        const getLHeaderRawInfo = {lHeaders: [], rawIndex: recordsStartRawIndex, language: undefined};
        if (excelRecords.some((rawValues, rawIndex) => {
            if (uniqLanguages.some(language => {
                let copyColumnsMlHeadersByLanguage = columnsMlHeadersObjectsByLanguage[language].slice();
                return rawValues.some(value => {
                    copyColumnsMlHeadersByLanguage.some((columnMlHeadersByLanguage, index) => {
                        if (columnMlHeadersByLanguage.includes(value)) {
                            getLHeaderRawInfo.lHeaders.push(value);

                            copyColumnsMlHeadersByLanguage.splice(index, 1);

                            return true;
                        }
                    });

                    if (!copyColumnsMlHeadersByLanguage.length) {
                        getLHeaderRawInfo.language = language;
                        return true;
                    }
                });
            })) {
                getLHeaderRawInfo.rawIndex = recordsStartRawIndex + rawIndex + 1;

                return true;
            }
        })) {
            return getLHeaderRawInfo;
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
    const headerRawInfo =
        getLHeaderRawInfo(sheets[0],
            Object.keys(recordDescriptionByFields).filter(key => recordDescriptionByFields[key].required === true)
                .map(key => recordDescriptionByFields[key].mlHeader));

    if (!headerRawInfo) {
        // შეცდომის მეილი უკვე გაგზავნილი იქნება
        return;
    }

    let records = [],
        // todo: requiredHeaders - ზე შემოწმება მოსაძრობია
        requiredHeaders = [],
        nonAccessibleRecords = [];
    let recordFieldsByLHeaders = getRecordFieldsByLHeaders(recordDescriptionByFields);
    let excelHeaders = undefined
    if (headerRawInfo.language) {
        excelHeaders = xlsx.utils.sheet_to_json(sheet, {
            raw: false,
            defval: '',
            header: 1,
            range: `A${headerRawInfo.rawIndex}:ZZ${headerRawInfo.rawIndex}`

        })[0];
    } else {
        excelHeaders = xlsx.utils.sheet_to_json(sheet, {
            raw: false,
            defval: '',
            header: 1,
            range: sheet["!ref"]

        });
    }

    const excelRecords = xlsx.utils.sheet_to_json(sheet, {
        raw: false,
        blankrows: '**',
        defval: '',
        range: headerRawInfo.rawIndex
    });

    // excelHeaderByFieldKey ობიექტში ვაყალიბებთ ჩანაწერის ფილდის დასახელებას თუ რომელი არსებული სვეტის დასახელება შეესაბამება
    // შესაქმნელი foundedLHeadersByFields (ჩანაწერების აღწერა) მიიღება შემდეგი ალგორითმით:
    // getLHeaderRawInfo-ს მიერ დაბრუნებული სტრიქონიში ვეძებ საჭირო lHeader-ს პოვნის შემთხვევაში ვიღებ
    // შესაბამისი ენის მიხედვით შესაბამის ფილდს getRecordFieldsByLHeaders-ით დაბრუნებულ ობიექტში
    // ეს ფილდი თუ არა აქვს შექმნის პროცესში არსებულ foundedLHeadersByFields-ობიექტს ვამატებ ინააღმდეგ შემთვევაში ვიკიდებ


    let foundedLHeadersByFields = {};
    if (headerRawInfo.language) {
        if (!foundedLHeadersByFields[headerRawInfo.language]) {
            foundedLHeadersByFields[headerRawInfo.language] = {};
        }
        excelHeaders.forEach(header => {
            if (headerRawInfo.lHeaders.includes(header) && !foundedLHeadersByFields[headerRawInfo.language][recordFieldsByLHeaders[headerRawInfo.language][header]]) {
                foundedLHeadersByFields[headerRawInfo.language][recordFieldsByLHeaders[headerRawInfo.language][header]] = header;
            } else {
                if (recordFieldsByLHeaders[headerRawInfo.language][header] && !foundedLHeadersByFields[headerRawInfo.language][recordFieldsByLHeaders[headerRawInfo.language][header]]) {
                    foundedLHeadersByFields[headerRawInfo.language][recordFieldsByLHeaders[headerRawInfo.language][header]] = header
                }
            }
        })
    } else {
        Object.keys(recordFieldsByLHeaders).forEach(lan => {
            if (!foundedLHeadersByFields[lan]) {
                foundedLHeadersByFields[lan] = {};
            }
            excelHeaders.forEach(Headers => {
                Headers.forEach(header => {
                    if (recordFieldsByLHeaders[lan][header] && !foundedLHeadersByFields[lan][recordFieldsByLHeaders[lan][header]]) {
                        foundedLHeadersByFields[lan][recordFieldsByLHeaders[lan][header]] = header
                    }
                })

            })
        })
        let maxLength = 0;
        let maxLang = '';
        let maxLengthObject = {};
        Object.keys(foundedLHeadersByFields).forEach(key => {
            const length = Object.keys(foundedLHeadersByFields[key]).length;
            if (length > maxLength) {
                maxLang = key;
                maxLength = length;
            }
        })
        if (!maxLengthObject[maxLang]) {
            maxLengthObject[maxLang] = foundedLHeadersByFields[maxLang]
        }
        foundedLHeadersByFields = maxLengthObject;
    }
console.log(foundedLHeadersByFields)
    Object.keys(recordFieldsByLHeaders).forEach(recordLHeader => {


        const excelHeader = _.find(excelHeaders, excelHeader => {
            return excelHeader && (excelHeader.toLowerCase().indexOf(recordLHeader.toLowerCase()) === 0);
        });

        if (excelHeader) {
            excelHeaderByFieldKey[recordFieldsByLHeaders[recordLHeader]] = excelHeader;
        }
    });
    // ვამოწმებთ ჩანაწერის რომელი აუცილებელი ფილდისთვის ექსელში არ გვაქვს შესაბამისსი სვეტის დასახელება
    Object.keys(recordDescriptionByFields).forEach(key => {
        const fieldOption = recordDescriptionByFields[key];
        if (!excelHeaderByFieldKey[key] && fieldOption.required) {
            arrify(fieldOption.mlHeader).forEach(header => {
                let mlHeader = is.string(header) ? gssLanguage.mlStrings[header] : header;
                requiredHeaders.push(mlHeader ? Object.keys(mlHeader).map(key => mlHeader[key]) : header);
            })
        }
    });

    // აუცილებელის სვეტის არქონის შემთხვევაში მისი ყველა ენის დასახელებებს ვაგზავნით შეცდომის სახით
    if (requiredHeaders.length > 0) {
        sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, gssLanguage.lString(gssLanguage.mlStrings['excelSheetHasNoData'], {language: language})
            + '\n'
            + String.format('<div style="margin: 0; border-bottom: 1px solid #d0d0d0; padding: 3px;">{0}</div>', [
                requiredHeaders.map(requiredHeader => requiredHeader.join(` ${gssLanguage.lString(gssLanguage.mlStrings['or'], {language: language})} `)).join(' - ')
            ]));
        return;
    }
    let line = 1;
    excelRecords.forEach(excelRecord => {
        ++line;

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
                    nonAccessibleRecord.line = line + xlsx.utils.decode_range(rangeForExcelRecords.split(':')[0]).s.r;

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

// todo: ალგორითმი ლაპარაკად დამიწერე
//
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


//                                  getLHeaderRawInfo - არწერა :


// პარამეტრები :
// getLHeaderRawInfo გადაეცემა sheetInfo - შიტის სახელი : string , შიტი : Object
// columnsMlHeaders : Array <array ან string>
// getLHeaderRawInfo - აბრუნებს (undefined - ს ან ობიექტს {lHeaders : Array<string> , rawIndex : რიცხვი ,language :undefined | string}) :

// ვთრეულობ შიტს - რომელიც შემოწმებულია და აუცილებლად მექნება, მაგრამ არ არის შემოწმებული შიტი ცარიელია თუ არა და ამას ვამოწმებ ამ ფუნქციაში. (sheet_ref)
// ვთრეულობ recordsStartRawIndex(საიდანაც იწყება ჩანაწერები), sheet_ref  გვაძლევს მხოლოდ იმ რეინჯს საიდანაც იწყება ჩანაწერები და სად მთავრდება
// მაგ : შიტი შეიძლება იწყებოსდეს A1:T100, მაგრამ ჩანაწერები მქონდეს A3:E100 - recordsStartRawIndex = A3 - ის ანუ ინდექსით 2 ის xlsx - დოკუმენტაციის მიხედვით, რადგან სწორად რომ მოგვცეს raw მერე დავამატო
// columnsMlHeaders - ვამოწმებ არის თუ არა მასში ჩანაწერები, რადგან ჩვენ შემთხვევაში ამ ფუნქციას მხოლოდ გადმოეცემა [*[name],*[debit]]  - ვადგენთ სამომავლოდ გასათვალისწინებლად Field - ებში გვაქვს თუ არა required ჩანაწერები
// მაგ : {*name,*debit,credit,Rate} , ვიღებთ  [[name],[debit]]
// let columnsMlHeadersObjects = []; გადმოცემული columnsMlHeaders - დან მიიღება gssLanguage.mlStrings - ის ml ობიექტები
// let allLanguageColumnsHeaders = []; ის დასახელებები, რომელიც არ იძებნება gssLanguage.mlStrings - ში
// მაგ : ქვედატირეები აღნიშანვს რომელიც არსებობს gssLanguage.mlStrings - ში
//       - columnsMlHeaders - დaნ იქმნება შემდეგი მასივები columnsMlHeadersObjects და allLanguageColumnsHeaders
//       [
//          [_debit, დებეტური ანგარიში],
//          ვალუტა,
//          [_credit, კრედიტული ანგარიში]
//       ]
//       - columnsMlHeadersObjects :
//       [
//          [{ka: 'დებეტი',en: 'Debit',ru: 'Дебет'}],
//          [],
//          [{ka: 'კრედიტი',en: 'Credit',ru: 'Кредит'}]
//       ]
//       - allLanguageColumnsHeaders :
//       [
//          [დებეტური ანგარიში],
//          [ვალუტა],
//          [კრედიტული ანგარიში]
//       ]
// ჩვენ შემთხვევაში :
// [
//      [ 'დებეტური ანგარიშის სახელი', 'debitAccountName' ],
//      'დებეტური ანგარიშის ვალუტა',
//      'კრედიტული ანგარიშის ნომერი',
//      [ '_amount', '_money' ]
// ]
//    - columnsMlHeadersObjects :
//      [
//          [],
//          [],
//          [],
//          [{ ka: 'თანხა', en: 'Amount', ru: 'Сумма' },{ ka: 'თანხა', en: 'money', ru: 'деньги' }]
//      ]
//    - allLanguageColumnsHeaders :
//      [
//          [ 'დებეტური ანგარიშის სახელი', 'debitAccountName' ],
//          [ 'დებეტური ანგარიშის ვალუტა' ],
//          [ 'კრედიტული ანგარიშის ნომერი' ],
//          []
//      ]

// const uniqLanguages - უნიკალური ენები - columnsMlHeadersObjects - დან გამომდინარე
// მაგ : [ka,ru], [ka,en,ru] [ka,en,ru,tr] -> [ka,ru] ჩვენ შემთხვევაში columnsMlHeadersObjects - დან გმომდინარე [ka,en,ru]
// let columnsMlHeadersObjectsByLanguage = {}; ენების მიხედვით იქმნება header - ების მასივის მასივები
// მაგ: ჩვენ შემთხვევაში columnsMlHeadersObjects და allLanguageColumnsHeaders გამომდინარე იქმნება
//     - columnsMlHeadersObjectsByLanguage :
//          ka: [
//             [ 'დებეტური ანგარიშის სახელი', 'debitAccountName' ],
//             [ 'დებეტური ანგარიშის ვალუტა' ],
//             [ 'კრედიტული ანგარიშის ნომერი' ],
//             [ 'თანხა', 'თანხა' ]
//           ],
//           en: [
//             [ 'დებეტური ანგარიშის სახელი', 'debitAccountName' ],
//             [ 'დებეტური ანგარიშის ვალუტა' ],
//             [ 'კრედიტული ანგარიშის ნომერი' ],
//             [ 'Amount', 'money' ]
//           ],
//           ru: [
//             [ 'დებეტური ანგარიშის სახელი', 'debitAccountName' ],
//             [ 'დებეტური ანგარიშის ვალუტა' ],
//             [ 'კრედიტული ანგარიშის ნომერი' ],
//             [ 'Сумма', 'деньги' ]
//           ]

// excelRecords - ექსელი ჩანაწერები მასივის მასივად
// getLHeaderRawInfo - ფორმირდება ასე
// მაგ :
//      - excelRecords - ის ერთი raw
//      [
//          დებეტი,
//          დებეტური ანგარიშის სახელი,
//          debitAccountName,
//          ვალუტა,
//          დებეტური ანგარიშის ვალუტა,
//          credit,
//          კრედიტული ანგარიშის ნომერი,
//          თანხა,
//          Сумма,
//          Amount
//      ]
// copyColumnsMlHeadersObjectsByLanguage - არის კოპია სადაც პოვნის შემდეგ ჩანაწერი იშლება
//      - copyColumnsMlHeadersObjectsByLanguage :
//          ka: [
//             [ 'დებეტური ანგარიშის სახელი', 'debitAccountName' ],
//             [ 'დებეტური ანგარიშის ვალუტა' ],
//             [ 'კრედიტული ანგარიშის ნომერი' ],
//             [ 'თანხა', 'თანხა' ]
//           ]
// წაშლილი ჩანაწერი :
//            ka: [
//             [ 'დებეტური ანგარიშის ვალუტა' ],
//             [ 'კრედიტული ანგარიშის ნომერი' ],
//             [ 'თანხა', 'თანხა' ]
//           ] ....
//
//     -  getLHeaderRawInfo -
//      {
//          lHeaders :
//         [
//              დებეტური ანგარიშის სახელი,
//              დებეტური ანგარიშის ვალუტა,
//              კრედიტული ანგარიშის ნომერი,
//              თანხა
//          ],
//          rawIndex : raw,
//          language : 'ka'
//       }

// getLHeaderRawInfo როგორ მიიღება, ალგორითმი :
// columnsMlHeadersObjectsByLanguage - ში მიღებულ  ენების მიხედვით მიღებულ მასივის მასივებში
// copyColumnsMlHeadersObjectsByLanguage ვიკოპირებ კონკრეტულ ენას,
// დავრბივარ ამ ენის მასივებში, excelRecords - ის მასივის მასივიდან აღებული ერთი მასივის value -ებს თუ შედის copyColumnsMlHeadersObjectsByLanguage - ის რომელიმე მასივში ვშლი იმ მასივს
// ამ value სხვა მასივებში აღარ ვამოწმებ რადგან ვიცი რომ ყველა მასივი განასხვავებულია
// ყოველჯერზე ვამოწმებ copyColumnsMlHeadersObjectsByLanguage - ის length - ს,
//  მაქვს თუ არა ელემენტები თუ დავაცარიელე სხვა ენებს ვიკიდებ  ესეიგი კონკრეტულ ენაზე ვიპოვე raw
