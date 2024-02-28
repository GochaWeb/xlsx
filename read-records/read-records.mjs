import {fileURLToPath} from "url";
import path from "path";
import _ from "lodash";
import is from "is";
import XLSX from "xlsx";

const recordsFromExcel = (await import('./records-from-excel-file.mjs')).default;
const gssLanguage = (await import('./gss-language.mjs')).default;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const sheetNames = ['საბუთები', 'Sheet1']
const excelGoodFields = {
    result: {
        required: false,
        mlHeader: ['result']

    },
    date: {
        required: false,
        mlHeader: ['date']
    },
    debit: {
        required: false, defaultValue: '',
        mlHeader: ['debit', 'debitAccountNumber', 'debitAccount', 'debitaccount']
    },
    barCode: {required: true, defaultValue: '', mlHeader: 'barCode'},
    series: {required: false, defaultValue: '', mlHeader: 'series'},
    term: {required: false, defaultValue: null, mlHeader: 'term'},
    manufacturer: {required: false, mlHeader: 'manufacturer'},
    grp: {required: false, defaultValue: '', mlHeader: 'group'},

    allStockPrice: {required: false, defaultValue: '', mlHeader: 'priceInAllStock'},
    priceInStock: {required: true, defaultValue: '', mlHeader: 'priceInStock'},
    allStockMinAmount: {required: false, defaultValue: '', mlHeader: 'minAmountInAllStock'},
    minAmountInStock: {required: false, defaultValue: '', mlHeader: 'minAmountInStock'}
};
const test = () => {
    const excelTestFields = {
        result: {
            required: false,
            mlHeader: {ka: 'ტესტ', en: 'gocha', ru: 'Дата'}
        },
        date: {
            required: false,
            mlHeader: ['დებეტური ანგარიშის ნომერი']
        },
        debit: {
            required: true, defaultValue: '',
            mlHeader: ['debit',
                {ka: 'ტესტ', en: 'gocha', ru: 'Дата'},
                {
                    ka: 'ტესტ', en: 'gia', ru: 'Дата', tr: 'ww'
                }, 'debitAccount', 'debitaccount', 'gia', 'დებეტური ანგარიშის სახელი'
            ]
        }
    };
    const excelSFFields = {
        result: {
            required: false,
            mlHeader: 'result'
        },
        date: {
            required: false,
            mlHeader: 'თარიღი'
        },
        debitAccountNumber: {
            required: false,
            mlHeader: 'debitAccountNumber'
        },
        debitAccountName: {
            required: true,
            mlHeader: ['დებეტური ანგარიშის სახელი','debitAccountName']
        },
        debitAccountCurrency: {
            required: true,
            mlHeader: 'დებეტური ანგარიშის ვალუტა'
        },
        creditAccountNumber: {
            required: true,
            mlHeader: 'კრედიტული ანგარიშის ნომერი'
        },
        creditAccountName: {
            required: false,
            mlHeader: 'კრედიტული ანგარიშის სახელი'
        },
        creditAccountCurrency: {
            required: false,
            mlHeader: 'კრედიტული ანგარიშის ვალუტა'
        },
        _amount: {
            required: true,
            mlHeader: ['_amount', 'money']
        },
        currency: {
            required: false,
            mlHeader: 'Currency'
        },
        rate: {
            required: false,
            mlHeader: 'Rate'
        },
        amountInMainCurrency: {
            required: false,
            mlHeader: 'amountInMainCurrency'
        },
        number: {
            required: false,
            defaultValue: 'defaultValue',
            mlHeader: 'number'
        },
        subject: {
            required: false,
            mlHeader: 'subject'
        },
        documentType: {
            required: false,
            mlHeader: 'documentType'
        },
        project: {
            required: false,
            mlHeader: 'project'
        },
        executed: {
            required: false,
            mlHeader: 'executed'
        },
        ID: {
            required: false,
            mlHeader: 'ID'
        },
        RSBillOfLadingID: {
            required: false,
            defaultValue: 'defaultValue',
            mlHeader: 'RS ზედდნადები - ID'
        },
        RSInvoiceN: {
            required: false,
            defaultValue: 'defaultValue',
            mlHeader: 'RS ანგარიშ-ფაქტურა - N'
        },
        User: {
            required: false,
            mlHeader: 'User'
        },

    };
    // ['sf-full.xlsx', 'sf-missingHeaders.xlsx']
    let filePath = path.normalize(path.join(__dirname, '..', 'test.xlsx'))
    console.log('reading file - : ' + filePath)
    recordsFromExcel(null, null, null, filePath, sheetNames, excelSFFields, null, null, null)
}

test()
