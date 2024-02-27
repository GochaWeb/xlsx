'use strict';

import _ from 'lodash';
import is from 'is';
import xlsx from 'xlsx';

import gssLanguage from '@gss-llc/gss-language.gss.ge';
import '@gss-llc/gss-common.gss.ge';
import XLSX from "xlsx";

const sendErrorEMail = (req, res, next, sender, subject, message) => {
    console.log('--- sendErrorEMail');
    console.log(message);
}
var arrify = value => {
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


// ეს ფუნქცია გადმოცემული recordFields-ში არსებლი ინფორმაციიდან აყალიბებს ობიექტს recordHeaders რომლის:
// ფილდები სვეტის დასახელებებია და მნიშვნელობები ამ ფილდის დასახელება.
const getRecordAllHeaders = (recordDescriptionByFields, language) => {
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

    // ჩანაწერის field-ისთვის იღებს ამ ფილდში მითითებული mlHeader-ის შესაბამის mlStrings-ის ობიექტს
    // თუ mlHeader სტრიქონია, ხოლო თუ mlHeader სტრიქონი არ არის მაშინ mlHeader უნდა იყოს თითონ mlString ობიექტი
    console.log('გავიარე ფუნქცია : getRecordAllHeaders \n დავაბრუნე ჰედერები :')
    console.log(recordHeaders)
    return recordHeaders;
};

// გადმოეცემა შიტი, columnsMlHeaders სვეტების სათაურების მასივის მასივი
const getHeaderRawIndex = (sheet, columnsMlHeaders) => {
    let rawIndex = undefined;

    // ვამოწმებ თუ შიტი თუ ცარიელია
    if (!sheet['!ref']) {
        // sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, String.format(gssLanguage.lString(gssLanguage.mlStrings.excelCanNotFindSheet, {language: language}), [`'${sheetNames.join('\', \'')}'`]));
        return rawIndex;
    }

    // მიღებული columnsMlHeaders-იდან ენების მიხედვით იქმნება Headers-ები
    let columnsMlHeadersByLanguage = {};
    // მიღებული columnsMlHeaders-იდან მიიღება columnsMlHeadersObjects ml ობიექტების მასივი
    let columnsMlHeadersObjects = [];
    // allLanguageColumnsHeaders - ის დასახელებები რომლებიც არ მოიძებნა ენებში
    let allLanguageColumnsHeaders = [];

    columnsMlHeaders.forEach(columnMlHeaders => {
        columnMlHeaders.forEach(header => {
            // აქ ვამოწმებთ თუ header სტრიქონია, მაშინ ვიღებთ შესაბამის gssLanguage.mlStrings - დან შესაბამის ობიექტს
            // ხოლო header სტრიქონი თუ არაა მაშინ ობიექტია და ვიღებს ამ ობიექტს
            let mlHeader = is.string(header) ? gssLanguage.mlStrings[header] : header;
            if (mlHeader) {
                columnsMlHeadersObjects.push(mlHeader)
            } else {
                allLanguageColumnsHeaders.push(header)
            }
        });
    })

    // [[სახელი, დასახელება], [დებეტი, დებეტური ანგარიში]]
    // [[ka, en], [ka, ru]] => [ka]
    //

    // columnsMlHeadersObjects- ობიექტებიდან ვიღე კეიებს და ვაბრუნებ მასივის მასივად. ვიღებ უნიკალურს
    const uniqLanguages = _.intersection(...columnsMlHeadersObjects.map(columnMlHeadersObjects => Object.keys(columnMlHeadersObjects)));

    //ვამოწმებ თუ მაქვს უნიკალური კეიები
    if (!uniqLanguages.length) {
        // sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, String.format(gssLanguage.lString(gssLanguage.mlStrings.excelCanNotFindSheet, {language: language}), [`'${sheetNames.join('\', \'')}'`]));
        return;
    }
    // columnsMlHeadersObjects - ს ვფილტრავ უნიკალური კეიების მიხედვით
    columnsMlHeadersObjects = columnsMlHeadersObjects.map(columnMlHeadersObjects => _.pick(columnMlHeadersObjects, uniqLanguages));

    // აქ ამ ობიექტს ვაქცევ ობიექტად სადაც filed - ის კეიები არის ამ ობიექტში არსებული ობიექტების კეიები
    // თუ კეი არსებობს ვალუეს ვაუფუშავ თუ არ არსებობს ის კეი მივათხრი ამ კეის და იმის ვალუეს დავუფუშავ
    columnsMlHeadersByLanguage = _.transform(columnsMlHeadersObjects, (result, columnMlHeadersObjects) => {
        _.forEach(columnMlHeadersObjects, (value, key) => {
            (result[key] || (result[key] = [])).push(value ? value : '');
        });
    }, columnsMlHeadersByLanguage);

    // აქ ვართიენებ იმ მოსულ ელემენტებს რომლებიც არ იძებნება ენებში და required - ია
    Object.values(columnsMlHeadersByLanguage).forEach(mlHeaders => {
        mlHeaders.push(...allLanguageColumnsHeaders);
    })
    Object.values(columnsMlHeadersByLanguage).some(headers => {
        // ვთრეულობ ბოლო როუს და დავრბივარ შიგნით
        return _.range(XLSX.utils.decode_range(sheet['!ref']).e.r).some(rowNum => {
            // ვთრეულობ ქოლუმნს
            return _.range(XLSX.utils.decode_range(sheet['!ref']).e.c).some(colNum => {
                // აქ ვიღებ კონკრეტულ უჯრას ანუ cell და ამ უჯრის მნიშვნელობა თუ დაემთხვა
                // ჰედერების მასივში არსებული რომელიმეს მნიშვნელობას ვაბრუნებ ინდექსს
                const cell = sheet[XLSX.utils.encode_cell({r: rowNum, c: colNum})];
                if (cell && headers.includes(cell.v)) {
                    rawIndex = rowNum + 1;
                    return true;
                }
                return false;
            });
        });
    });
    // შეიძლება შეტყობინების დაბრუნებაც თუ ინდექსი undefined - ია
    //ამ ფუნქციამ შეიძლება დააბრუნოს undefined თუ შიტი ცარიელია ან ვერ მოიძებნა შიტში ჰედერები
    console.log('გავიარე ფუნქცია : getHeaderRawIndex \n დავაბრუნე ჰედერების row - ს ინდექსი : ' + rawIndex)
    return rawIndex;
}

// აბრუნებს ექსელის ჩანაწერების მასივს ან შეცდომის შემთხვევაში აგზავნის შესაბამის მეილს და აბრუნებს undefined
export default (req, res, next, excelPath, sheetNames, recordDescriptionByFields, language, errorMailSender, errorMailSubject) => {
    language = language || 'en';
    const excelWorkbook = xlsx.readFile(excelPath);

    // sheetNames - გადმოცემული შიტის დასახელებებიდან მხოლოდ ერთი დასახელების შიტი უნდა მოიძებნოს
    let sheets = [];
    sheetNames.forEach(sheetName => {
        const sheet = excelWorkbook.Sheets[sheetName];
        if (sheet) {
            sheets.push({sheetName: sheetName, sheet})
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
    const sheet = excelWorkbook.Sheets[sheets[0].sheetName];


    //ამ შემთხვევაში ვეძახი უბრალოდ ეს კოდი ამოვარდება აქედან რადგან გადმოეცემა
    const headerRawIndex =
        getHeaderRawIndex(sheet,
            Object.keys(recordDescriptionByFields).filter(key => recordDescriptionByFields[key].required === true)
                .map(key => arrify(recordDescriptionByFields[key].mlHeader)));
    if (!headerRawIndex) {
        // todo: შეტყობინებაა მოსაფიქრებელი
        console.log('შიტში არ მოძებნა ჰედების row')
        return;
    }

    const rangeForExcelHeaders = 'A' + headerRawIndex + ':' + 'ZZ' + headerRawIndex;
    const rangeForExcelRecords = 'A' + headerRawIndex + ':' + sheet["!ref"].split(':')[1];

    let records = [],
        requiredHeaders = [],
        nonAccessibleRecords = [];
    let recordAllLHeaders = getRecordAllHeaders(recordDescriptionByFields);
    const excelHeaders = xlsx.utils.sheet_to_json(sheet, {raw: false, header: 1, range: rangeForExcelHeaders})[0];
    console.log('recordsFromExcel -  ის ფუნქციაში მივიღე ექსელის ყველა ჰედერეი რეინჯიდან : ' + rangeForExcelHeaders)
    console.log(excelHeaders)
    const excelRecords = xlsx.utils.sheet_to_json(sheet, {
        raw: true,
        blankrows: true,
        range: xlsx.utils.decode_range(rangeForExcelRecords)
    });
    console.log('recordsFromExcel -  ის ფუნქციაში მივიღე ექსელის ყველა ჩანაწერი რეინჯიდან : ' + rangeForExcelRecords)
    console.log(excelRecords)
    // თუ ცარიელი ექსელია ვბრუნდები
    if (excelRecords.length === 0) {
        console.log('შიტი ცარიელია')
        return;
    }

    // excelHeaderByFieldKey ობიექტში ვაყალიბებთ ჩანაწერის ფილდის დასახელებას თუ რომელი არსებული სვეტის დასახელება შეესაბამება
    let excelHeaderByFieldKey = {};
    Object.keys(recordAllLHeaders).forEach(recordLHeader => {
        const excelHeader = _.find(excelHeaders, excelHeader => {
            return excelHeader && (excelHeader.toLowerCase().indexOf(recordLHeader.toLowerCase()) === 0)
        });
        if (excelHeader) {
            excelHeaderByFieldKey[recordAllLHeaders[recordLHeader]] = excelHeader;
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
        console.log(requiredHeaders.map(requiredHeader => console.log('აუცილებელის სვეტები არ მოძებნა' + " " + requiredHeader)));
        // sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, gssLanguage.lString(gssLanguage.mlStrings['importExcelRequiredHeaders'], {language: language})
        //     + '\n'
        //     + String.format('<div style="margin: 0; border-bottom: 1px solid #d0d0d0; padding: 3px;">{0}</div>', [
        //         requiredHeaders.map(requiredHeader => requiredHeader.join(` ${gssLanguage.lString(gssLanguage.mlStrings['or'], {language: language})} `)).join(' - ')
        //     ]));
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
            const fieldKey = recordAllLHeaders[key];
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
    console.log('გავიარე ფუნქცია recordsFromExcel - ს  დავაბრუნე საბოლოო ჩანაწერები : ')
    console.log(records)
    return records;
};
