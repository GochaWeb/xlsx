import gssCommon from '@gss-llc/gss-common.gss.ge';

const recordsFromExcel = (await import('./records-from-excel-file.mjs')).default;
const gssLanguage = (await import('./gss-language.mjs')).default;

const excelGoodFields = {
    name: {required: true, mlHeader: 'name'},
    unit: {required: true, mlHeader: 'Dimension'},
    code: {required: false, value: '', mlHeader: 'code'},
    barCode: {required: false, value: '', mlHeader: 'barCode'},
    series: {required: false, value: '', mlHeader: 'series'},
    term: {required: false, value: null, mlHeader: 'term'},
    manufacturer: {required: false, mlHeader: 'manufacturer'},
    grp: {required: false, value: '', mlHeader: 'group'},

    allStockPrice: {required: false, value: '', mlHeader: 'priceInAllStock'},
    allStockMinAmount: {required: false, value: '', mlHeader: 'minAmountInAllStock'}
};

let excelGoods =
    recordsFromExcel(null,null,null,
        '/Users/chipintoza/GSS Projects/gss.ge/test-projects/xlsx/sf-turn-over-.xlsx',
        gssLanguage.lStrings(gssLanguage.mlStrings.goods),
        excelGoodFields, 'ka', 'gss', 'error');
