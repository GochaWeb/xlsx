const XLSX = require("xlsx");
var wb  = XLSX.readFile("mogebazarali.xlsx", {dense : true})




var i = GetJson(wb.SheetNames)
console.log(i)
// ჰედერები
const headerRowData = [
    "Date",
    "Debit",
    null,
    null,
    "Credit",
];

// ვორქშიტის შექმნა - შექმნის ვორქშიტს და გამოტოვებს პირველ როუს
const ws = XLSX.utils.aoa_to_sheet([[], headerRowData]);

// ამ ვორქშიტში დაამატებს ამ ინფორმაციას და პარამეტრად რადგან აქვს ორიჯინი -1 ეს ნიშნავს რომ ქვევიდან მიაწებებს
XLSX.utils.sheet_add_aoa(ws, [[
    "2022-01-01",
    "AccountXYZ",
    null,
    null,
]], { origin: -1 });

// ქმნის ფაილს და შიტის დასახელებას
const newWorkbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(newWorkbook, ws, "Sheet1");
XLSX.writeFile(newWorkbook, "example.xlsx", {type : "string"});

function GetJson(sheetNames){
    let data = {};
    sheetNames.forEach((sheetName) =>{
        if(!wb.Sheets.hasOwnProperty(sheetName)){
            console.log('Sheet: ' + sheetName + ' does not exist.')
        }
        let worksheet = wb.Sheets[sheetName];
        data[sheetName] = XLSX.utils.sheet_to_json(worksheet);
    } )
    return data;
}


