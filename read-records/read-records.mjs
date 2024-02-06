import gssCommon from '@gss-llc/gss-common.gss.ge';
const recordsFromExcel = (await import('./records-from-excel-file.mjs')).default;
const gssLanguage = (await import('./gss-language.mjs')).default;

let filePath = new URL('../goods.xlsx', import.meta.url).pathname.toString();

if(filePath.indexOf('%20') !== -1) {
    filePath = filePath.replace(/%20/g, " ");
}



const excelGoodFields = {
    name: {required: false, mlHeader: 'name'},
    unit: {required: false, mlHeader: 'Dimension'},
    Test: {required: false, mlHeader: 'Test'},

    code: {required: false, value: '', mlHeader: 'code'},
    barCode: {required: false, value: '', mlHeader: 'barCode'},
    series: {required: false, value: '', mlHeader: 'series'},
    term: {required: false, value: null, mlHeader: 'term'},
    manufacturer: {required: false, mlHeader: 'manufacturer'},
    grp: {required: false, value: '', mlHeader: 'group'},

    allStockPrice: {required: false, value: '', mlHeader: 'priceInAllStock'},
    allStockMinAmount: {required: false, value: '', mlHeader: 'minAmountInAllStock'}
};

// console.log(gssLanguage.lStrings(gssLanguage.mlStrings.goods))

const sheetNames = ['საბუთები','საქონელი']


let excelGoods =
    recordsFromExcel(null,null,null,
        filePath,
        sheetNames,
        excelGoodFields, 'ka', 'gss', 'error');






// const workbook = xlsx.readFile('/Users/gocha-gogicha/programing/xlsx/sf-turn-over-.xlsx',{cellDates : true});
// const sheetName = workbook.SheetNames[0];
//
// const sheet = workbook.Sheets[sheetName];
// const sheetData = xlsx.utils.sheet_to_json(sheet, { header : 1 , raw : true });
//
// let headers;
// let data;
//
// const emptyArrayIndex = sheetData.findIndex(row => row.length === 0);
//
// if (emptyArrayIndex !== -1) {
//
//     headers = sheetData.slice(0, emptyArrayIndex);
//     data = sheetData.slice(emptyArrayIndex + 1);
// } else {
//     data = sheetData;
// }




