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
        let recordHeaders = {};
        Object.keys(recordDescriptionByFields).forEach(key => {
            arrify(recordDescriptionByFields[key].mlHeader).forEach(header => {
                // აქ ვამოწმებთ თუ header სტრიქონია, მაშინ ვიღებთ შესაბამის gssLanguage.mlStrings - დან შესაბამის ობიექტს
                // ხოლო header სტრიქონი თუ არაა მაშინ ობიექტია და ვიღებს ამ ობიექტს
                let mlHeader = is.string(header) ? gssLanguage.mlStrings[header] : header;
                if (!mlHeader) {
                    recordHeaders[header] = key
                    return;
                }

                if (language) {
                    recordHeaders[mlHeader[language].toLowerCase()] = key;
                } else {
                    Object.keys(mlHeader).forEach(mlKey => {
                        recordHeaders[mlHeader[mlKey.toLowerCase()]] = key;
                    });
                }
            });
        });

        return recordHeaders;
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

        const recordsStartRawIndex = xlsx.utils.decode_range(sheet_ref).s.r;
        if (!columnsMlHeaders.length) {
            return {
                lHeaders: [],
                language: undefined,
                rawIndex: recordsStartRawIndex
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
                getLHeaderRawInfo.rawIndex = recordsStartRawIndex + rawIndex +1;

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
     console.log(xlsx.utils.encode_row(5))
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

    const excelHeaders = xlsx.utils.sheet_to_json(sheet, {
        raw: false,
        header: 1,
        defval: '',
        range: `A${headerRawInfo.rawIndex + 1}:ZZ${headerRawInfo.rawIndex + 1}`
    })[0];
    const excelRecords = xlsx.utils.sheet_to_json(sheet, {
        raw: false,
        blankrows: '**',
        defval: '',
        range: headerRawInfo.rawIndex
    });

    // excelHeaderByFieldKey ობიექტში ვაყალიბებთ ჩანაწერის ფილდის დასახელებას თუ რომელი არსებული სვეტის დასახელება შეესაბამება
    let excelHeaderByFieldKey = {};
   console.log(recordFieldsByLHeaders)
    Object.keys(recordFieldsByLHeaders).forEach(recordLHeader => {
        // todo: excelHeaderByFieldKey მისაღებად პრიორიტეტული უნდა იყოს getLHeaderRawInfo-ით დაბრუნებული
        //  და არა აუცილებელი ფილდებისთვის პირველივე შემხვედრი მარცხნიდან (getLHeaderRawInfo-ით დაბრუნებულ ენაზე
        //  ან ყველა ენაზე თუ required ფილდები თუ არ აქვს) და არა ბოლო როგორც ეხლაა

        const excelHeader = _.find(excelHeaders, excelHeader => {
            return excelHeader && (excelHeader.toLowerCase().indexOf(recordLHeader.toLowerCase()) === 0);
        });

        if (excelHeader) {
            excelHeaderByFieldKey[recordFieldsByLHeaders[recordLHeader]] = excelHeader;
        }
    });
console.log(excelHeaderByFieldKey)
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

// todo: ალგორითმი ლაპარაკად დამიწერე
// getLHeaderRawInfo - დან მიღებულ შედეგში პირველრიგში უნდა შევამოწმო ენა თუ ენა
// მაქვს ესეიგ იჩანაწერებიც მაქვს კონკრეტულ ენაზე,


//headerRawInfo => getLHeaderRawInfo.language - getLHeaderRawInfo.lHeaders
// recordFieldsByLHeaders[getLHeaderRawInfo.language]
// მაქვს :
// recordFieldsByLHeaders[getLHeaderRawInfo.language] - ში უნდა ვირბინო foreach- ით რადგან ყველა ჩანაწერი მჭირდება
// excelHeaders - ში უნდა ვიებინო some - ით დავაბრუნო პირველივე შემხვედრი
// ამის მერე მჭირდება კოდის ეს ნაწილი
// if (excelHeader) {
//     excelHeaderByFieldKey[recordFieldsByLHeaders[recordLHeader]] = excelHeader;
// }
//  excelHeaderByFieldKey - ში ვაყალიბებ ესეთ ობიექტს -
//  excelHeaderByFieldKey {
//     Date : 'თარიღი'
//  }
//მაგ :
// recordFieldsByLHeaders[getLHeaderRawInfo.language][0].forEach(obj => {
//     excelHeader.some(lheader => {
//         if (obj.key.toLowerCase() === lheader.toLowerCase()) {
//             excelHeaderByFieldKey[obj.value] = lheader;
//             return true;
//         }
//     });
// });


// არ მაქვს :
// getRecordFieldsByLHeaders -დან უნდა ავიღო ის მასივი რომელშიც მეტი ჰედერი მექნება ან თუ ერთმანეთის ტოლია პირველივე.
// დადგენილ მასივში იგივე პრინციპით უნდა შევამოწმო ყველა ჩანაწერი ავიღო პირველივე შემხვედრი ანუ უკიდურესი მარცხენა და
// დავაფორმირო ობიექტი
//excelHeaderByFieldKey {
//      Date : 'date'
//  }
