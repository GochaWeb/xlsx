'use strict';

import _ from 'lodash';
import is from 'is';
import xlsx from 'xlsx';

import gssLanguage from '@gss-llc/gss-language.gss.ge';

const sendErrorEMail =  (req, res, next, sender, subject, message) => {
    console.log('--- sendErrorEMail');
    console.log(message);
}


// ეს ფუნქცია გადმოცემული recordFields-ში არსებლი ინფორმაციიდან აყალიბებს ობიექტს recordHeaders რომლის:
// ფილდები სვეტის დასახელებებია და მნიშვნელობები ამ ფილდის დასახელება.
const getRecordAllHeaders = (recordFields, language) => {
    let recordHeaders = {};
    Object.keys(recordFields).forEach(key => {
        // ჩანაწერის field-ისთვის იღებს ამ ფილდში მითითებული mlHeader-ის შესაბამის mlStrings-ის ობიექტს
        // თუ mlHeader სტრიქონია, ხოლო თუ mlHeader სტრიქონი არ არის მაშინ mlHeader უნდა იყოს თითონ mlString ობიექტი
        let mlHeader = is.string(recordFields[key].mlHeader) ? gssLanguage.mlStrings[recordFields[key].mlHeader] : recordFields[key].mlHeader;
        if (!mlHeader) {
            // თუ mlHeader ცარიელია ან mlStrings-ში არ მოიძებნა შესაბამისი mlStrings-ის ობიექტი
            // მაშინ ჩანაწერის field-ისთვის იგულისხმება რომ  ამ ფილდის შეესაბამება მისივე დასახელების სვეტი
            recordHeaders[key.toLowerCase()] = key;
            return;
        }
        // თუ language გადმოცემულია მხოლოდ ამ ენის დასახელების სვეტს შეუსაბამებთ.
        // თუ არა გადაცემული ყველა ენის დასსახელების სვეტს
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

const getHeaderRawIndex =  () => {
    return 6;
}

// აბრუნებს ექსელის ჩანაწერების მასივს ან შეცდომის შემთხვევაში აგზავნის შესაბამის მეილს და აბრუნებს undefined
export default (req, res, next, excelPath, sheetNames, recordDesctiptionByFields, headerRawIndex, language, errorMailSender, errorMailSubject) => {
    language = language || 'en';

    const excelWorkbook = xlsx.readFile(excelPath);

    // sheetNames - გადმოცემული შიტის დასახელებებიდან მხოლოდ ერთი დასახელების შიტი უნდა მოიძებნოს
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
    const sheet = sheets[0].sheet;

    //ამ შემთხვევაში ვეძახი უბრალოდ ეს კოდი ამოვარდება აქედან რადგან გადმოეცემა
    headerRawIndex =  getHeaderRawIndex();

    if(!headerRawIndex){
        //აქ დაიწერება შეცდომის კოდი
        return;
    }

    const range =  'A'+headerRawIndex+ ':' + sheet["!ref"].split(':')[1];


    let records = [],
        requiredHeaders = [],
        nonAccessibleRecords = [];

    let recordAllLHeaders = getRecordAllHeaders(recordDesctiptionByFields);

    const excelHeaders = xlsx.utils.sheet_to_json(sheet, {raw: false, header: 1, range: range})[0];
    const excelRecords = xlsx.utils.sheet_to_json(sheet, {raw: true, blankrows: '**',range : xlsx.utils.decode_range(range)});

    // თუ ცარიელი ექსელია ვბრუნდები
    if (excelRecords.length === 0) {
        return;
    }

    // excelHeaderByFieldKey ობიექტში ვაყალიბებთ ჩანაწერის ფილდის დასახელებას თუ რომელი არსებული სვეტის დასახელება შეესაბამება
    let excelHeaderByFieldKey = {};
    Object.keys(recordAllLHeaders).forEach(recordLHeader => {
        const excelHeader = _.find(excelHeaders, excelHeader => {
            return excelHeader && (excelHeader.toLowerCase().indexOf(recordLHeader) === 0)
        });
        if (excelHeader) {
            excelHeaderByFieldKey[recordAllLHeaders[recordLHeader]] = excelHeader;
        }
    });

    // ვამოწმებთ ჩანაწერის რომელი აუცილებელი ფილდისთვის ექსელში არ გვაქვს შესაბამისსი სვეტის დასახელება
    Object.keys(recordDesctiptionByFields).forEach(key => {
        const fieldOption = recordDesctiptionByFields[key];
        if (!excelHeaderByFieldKey[key] && fieldOption.required) {
            let mlHeader = is.string(fieldOption.mlHeader) ? gssLanguage.mlStrings[fieldOption.mlHeader] : fieldOption.mlHeader;
            requiredHeaders.push(mlHeader ? Object.keys(mlHeader).map(key => mlHeader[key]) : key);
        }
    });

    // აუცილებელის სვეტის არქონის შემთხვევაში მისი ყველა ენის დასახელებებს ვაგზავნით შეცდომის სახით
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

        Object.keys(recordDesctiptionByFields).forEach(key => {
            const fieldOption = recordDesctiptionByFields[key];
            // ჩანაწერის აღწერაში მითითებული ფილდის შესაბამის ექსელის სვეტში
            // ამ შექმნილი ჩანაწერისთვის record მნიშვნელობა თუ არაა შეტანილი
            if (excelHeaderByFieldKey.hasOwnProperty(key) && !record[key]) {
                // ეს მნიშვნელობა თუ აუცილებელია ამ ჩანაწერს/record ვთვლით ცუდ ჩანაწერად
                if (fieldOption.required) {
                    nonAccessibleRecordFound = true;

                    nonAccessibleRecord.excelRecord = excelRecord;
                    nonAccessibleRecord.requiredHeader.push(excelHeaderByFieldKey[key] || key);
                    nonAccessibleRecord.line = line;

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


    // თუ უდი ჩანაწერები მოიძებნა ვაგზავნი მეილს და არაფერს არ ვაბრუნებ
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

    return records;
};
