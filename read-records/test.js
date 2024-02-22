import {fileURLToPath} from "url";
import path from "path";
import _ from "lodash";
import is from "is";
import XLSX from "xlsx";

const recordsFromExcel = (await import('./records-from-excel-file.mjs')).default;
const gssLanguage = (await import('./gss-language.mjs')).default;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.normalize(__dirname + '/../sf-documents.xlsx');
const workbook = XLSX.readFile('../sf-documents.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

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

const sendErrorEMail = (req, res, next, sender, subject, message) => {
    console.log('--- sendErrorEMail');
    console.log(message);
}

const excelGoodFields = {
    result: {
        required: false,
        mlHeader: [
            ['result']
        ]
    },
    date: {
        required: true,
        mlHeader: ['date']
    },
    debit: {
        required: false, defaultValue: '',
        mlHeader: ['debit', 'debitAccountNumber', 'debitAccount', 'debitaccount']
    },
    barCode: {required: false, defaultValue: '', mlHeader: 'barCode'},
    series: {required: false, defaultValue: '', mlHeader: 'series'},
    term: {required: false, defaultValue: null, mlHeader: 'term'},
    manufacturer: {required: false, mlHeader: 'manufacturer'},
    grp: {required: false, defaultValue: '', mlHeader: 'group'},

    allStockPrice: {required: false, defaultValue: '', mlHeader: 'priceInAllStock'},
    priceInStock: {required: true, defaultValue: '', mlHeader: 'priceInStock'},
    allStockMinAmount: {required: false, defaultValue: '', mlHeader: 'minAmountInAllStock'},
    minAmountInStock: {required: false, defaultValue: '', mlHeader: 'minAmountInStock'}
};


const excelTestFields = {
    result: {
        required: false,
        mlHeader: ['result']
    },
    date: {
        required: true,
        mlHeader: ['date']
    },
    debit: {
        required: true, defaultValue: '',
        mlHeader: ['debit', {ka: 'ტესტ', en: 'test', ru: 'Дата'}, {
            ka: 'ტესტ',
            en: 'test',
            ru: 'Дата',
            tr: 'ww'
        }, {gia: 5}, 'gocha', 'debitAccountNumber', 'debitAccount', 'debitaccount', 'gia']
    }
};


const mlHeadersArray = Object.keys(excelTestFields)
    .filter(key => excelTestFields[key].required === true)
    .map(key => arrify(excelTestFields[key].mlHeader));


const getHeaderRawIndex = (mlHeaders, sheet) => {
    // გადმოეცემა mlHeaders - დაფილტრული required - ის მიხედვით მასივის მასივი და შიტი
    sheet = worksheet;
    if (!worksheet['!ref']) {
        //ვამოწმებ თუ შიტი ცარიელია
        // sendErrorEMail(req, res, next, errorMailSender, errorMailSubject, String.format(gssLanguage.lString(gssLanguage.mlStrings.excelCanNotFindSheet, {language: language}), [`'${sheetNames.join('\', \'')}'`]));
        return;
    }

    //ეს მჭირდება ციკლისთვის რომ ტყვილად არ იტრიალოს
    let IndexFounded = false;

    //დაუფილტრავი ჰედერების მასივები სადაც კეიები არის ენის დასახელება
    let filteredMlHeadersByLanguage = {};
    //mlHeader - ის ობიექტების მასივი
    let mlHeadersObjArray = [];
    let notMlHeadersArray = [];
    let RawIndex = 0;


    mlHeaders.forEach(headerArr => {
        headerArr.forEach(header => {
            // აქ ვამოწმებთ თუ header სტრიქონია, მაშინ ვიღებთ შესაბამის gssLanguage.mlStrings - დან შესაბამის ობიექტს
            // ხოლო header სტრიქონი თუ არაა მაშინ ობიექტია და ვიღებს ამ ობიექტს
            let mlHeader = is.string(header) ? gssLanguage.mlStrings[header] : header;
            if (mlHeader) {
                mlHeadersObjArray.push(mlHeader)
            }
        });
    })
    //_.uniq(...mlHeadersObjArray.map(obj => Object.keys(obj)));
    // ვამოწმებ mlHeadersObjArray არსებული ობიექტებში ყველა კეის ვთრეულობ მასივად და უნიკალურს ვაბრუნებ
    // ამ კეიების მიხედვით ვფილტრავ
    if (mlHeadersObjArray.length > 0) {
        const AllKeys = mlHeadersObjArray.map(obj => Object.keys(obj))

        //mlHeadersObjArray = mlHeadersObjArray.filter(obj => _.isEqual(Object.keys(obj), uniqKeys))
    }
    //აქ ამ ობიექტს ვაქცევ ობიექტად სადაც filed - ის კეიები არის ამ ობიექტში არსებული ობიექტების კეიები
    filteredMlHeadersByLanguage = _.transform(mlHeadersObjArray, (result, obj) => {
        _.forEach(obj, (value, key) => {
            (result[key] || (result[key] = [])).push(value);
        });
    }, filteredMlHeadersByLanguage);

    Object.values(filteredMlHeadersByLanguage).forEach(headers => {
        //დავრბივარ ამ დაფილტრულ ობიექტში და ვიღებ თითოეული ობიექტის მასივს
        for (let rowNum = 0; rowNum <= XLSX.utils.decode_range(worksheet['!ref']).e.r; rowNum++) {
            //ვიღებ შიტის start raw -ს

            if (IndexFounded) {
                //აქ ვამოწმებ თუ ინდექსი ნაპოვნია ტყვილად რომ არ იტრიალოს ციკლმა
                return;
            }
            for (let colNum = 0; colNum <= XLSX.utils.decode_range(worksheet['!ref']).e.c; colNum++) {
                //როუს მიხედვით დავრბივარ ქოლუმნებში და ვამოწმებ თითოეულ უჯრის value - ს,
                // თუ ეს value შედის ამ headers - ის მასივში
                const cell = worksheet[XLSX.utils.encode_cell({r: rowNum, c: colNum})];
                if (cell && headers.includes(cell.v)) {
                    IndexFounded = true
                    RawIndex = rowNum;
                    return;
                }
            }
        }

    })
    //აქ დაბრუნდება ნაპოვნი ინდექსი ან დეფოლტ მნიშვნელობა 0
    // შეიძლება შეტყობინების დაბრუნებაც თუ ინდექსი ნულის ტოლია
    //ამ ფუნქციამ შეიძლება დააბრუნოს undefined თუ შიტი ცარიელია
    return RawIndex;
}

const result = getHeaderRawIndex(mlHeadersArray)
console.log(result)


const sheetNames = ['საბუთები', 'საქონელი']

// let excelGoods =
//     recordsFromExcel(null,null,null,
//         filePath,
//         sheetNames,
//         excelGoodFields, 'ka', 'gss', 'error');


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




