'use strict';

import _ from 'lodash';
import is from 'is';
import xlsx from 'xlsx';

import gssLanguage from '@gss-llc/gss-language.gss.ge';


const sendErrorEMail =  (req, res, next, sender, subject, message) => {
    console.log('--- sendErrorEMail');
    console.log(message);
}


const getRecordHeaders = (recordFields, language) => {

    let recordHeaders = {};
    Object.keys(recordFields).forEach(key => {
        let mlHeader = is.string(recordFields[key].mlHeader) ? gssLanguage.mlStrings[recordFields[key].mlHeader] : recordFields[key].mlHeader;
        if (!mlHeader) {
            recordHeaders[key.toLowerCase()] = key;
            return;
        }
        if (language) {
            recordHeaders[mlHeader[language].toLowerCase()] = key;
        } else {
            Object.keys(mlHeader).forEach(mlKey => {
                recordHeaders[mlHeader[mlKey].toLowerCase()] = key
            })
        }
    });
    return recordHeaders;
};

export default (req, res, next, excelPath, sheetNames, recordFields, language, errorMailSender, errorMailSubject) => {
    language = language || 'en';

    const excelWorkbook = xlsx.readFile(excelPath);

    let sheets = [];
    sheetNames.forEach(sheetName => {
        const sheet = excelWorkbook.Sheets[sheetName];
        if (sheet) {
            sheets.push({sheetName: sheet.name, sheet})
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

    let records = [],
        requiredHeaders = [],
        nonAccessibleRecords = [];

    let recordLHeaders = getRecordHeaders(recordFields);

    const sheet = sheets[0].sheet;
    const excelHeaders = xlsx.utils.sheet_to_json(sheet, {raw: false, header: 1, range: 'A1:ZZ1'})[0];
    const excelRecords = xlsx.utils.sheet_to_json(sheet, {raw: true,blankrows: '**'});

    if (excelRecords.length === 0) {
        return;
    }

    let excelHeaderByFieldKey = {};
    let recordLHeaderByExcelHeader = {};
    Object.keys(recordLHeaders).forEach(recordLHeader => {

        const excelHeader = _.find(excelHeaders, excelHeader => {
            return excelHeader && (excelHeader.toLowerCase().indexOf(recordLHeader) === 0)
        });
        if (excelHeader) {
            excelHeaderByFieldKey[recordLHeaders[recordLHeader]] = excelHeader;
            recordLHeaderByExcelHeader[excelHeader] = recordLHeader;
        }
    });

    Object.keys(recordFields).forEach(key => {

        const fieldOption = recordFields[key];
        if (!excelHeaderByFieldKey[key] && fieldOption.required) {
            let mlHeader = is.string(fieldOption.mlHeader) ? gssLanguage.mlStrings[fieldOption.mlHeader] : fieldOption.mlHeader;
            requiredHeaders.push(Object.keys(mlHeader).map(key => mlHeader[key]));
        }
    });

    if (requiredHeaders.length > 0) {
        sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, gssLanguage.lString(gssLanguage.mlStrings['importExcelRequiredHeaders'], {language: language})
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

        Object.keys(excelRecord).forEach(key => {
            const field = recordLHeaders[recordLHeaderByExcelHeader[key]];

            if (field) {
                record[field] = excelRecord[key];
            }
        });

        let nonAccessibleRecordFound = false;
        let nonAccessibleRecord = {requiredHeader: []};

        Object.keys(recordFields).forEach(key => {
            const fieldOption = recordFields[key];

            // ექსელის სვეტში თუ არაა ეს ფილდი რომ არ ქონდეს
            if (excelHeaderByFieldKey.hasOwnProperty(key) && !record[key]) {
                if (fieldOption.required) {
                    nonAccessibleRecordFound = true;

                    nonAccessibleRecord.excelRecord = excelRecord;
                    nonAccessibleRecord.requiredHeader.push(excelHeaderByFieldKey[key] || key);
                    nonAccessibleRecord.line = line;

                    return;
                }

                record[key] = fieldOption.value;
            }
        });

        if (nonAccessibleRecordFound) {
            nonAccessibleRecords.push(nonAccessibleRecord);
            return;
        }

        records.push(record);
    });


    if (nonAccessibleRecords.length > 0) {
        let lineText = gssLanguage.lString(gssLanguage.mlStrings['line'], {language: language}).toLowerCase();

        sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, gssLanguage.lString(gssLanguage.mlStrings['importGoodsExcelNonAccessibleRecords'], {language: language})
            + '\n'
            + String.format('<table style="margin: 0;">{0}</table>', [
                nonAccessibleRecords.map(nonAccessibleRecord =>
                    String.format('<tr><td style="border-bottom: 1px solid #d0d0d0; padding: 3px;">{0} - {1}</td><td style="border-bottom: 1px solid #d0d0d0; padding: 3px;">{2}</td></tr>', [
                        nonAccessibleRecord.requiredHeader.join(', '),
                        lineText,
                        nonAccessibleRecord.line
                    ])
                ).join('\n')
            ]));

        return;
    }
console.log(records)
    return records;
};
