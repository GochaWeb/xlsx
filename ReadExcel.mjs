import _ from 'lodash';
import is from 'is';
import xlsx from 'xlsx';

const excelWorkbook = xlsx.readFile('sf-turn-over-.xlsx');

let sheetNames = ['ბრუნვა','ამონაწერი','parameters','iris','sheet1']
const getRecordHeaders = (recordFields, language) => {
    let recordHeaders = {};
    Object.keys(recordFields).forEach(key => {
        console.log(recordFields[key].mlHeader)
        let mlHeader = is.string(recordFields[key].mlHeader) ? gssLanguage.mlStrings[recordFields[key].mlHeader] : recordFields[key].mlHeader;
        if (!mlHeader) {
            recordHeaders[key.toLowerCase()] = key;
            return;
        }
        if (language) {
            recordHeaders[mlHeader[language].toLowerCase()] = key;
        } else {
            Object.keys(mlHeader).forEach(mlKey => recordHeaders[mlHeader[mlKey].toLowerCase()] = key);
        }
    });
console.log(recordHeaders)
    return recordHeaders;
};

let sheets = [];
sheetNames.forEach(mySheetNames => {
    let foundSheetName = excelWorkbook.SheetNames.find(sheetName =>
        sheetName.trim().toLowerCase() === mySheetNames.trim().toLowerCase()
    );
    if (foundSheetName) {
        const sheet = excelWorkbook.Sheets[foundSheetName];
        if (sheet) {
            sheets.push({sheetName: foundSheetName, sheet});
        }
        const headers = xlsx.utils.sheet_to_json(sheet,{raw : false, header : 1, blankrows : '**' });
console.log(headers)
  getRecordHeaders(headers)

    }
});






