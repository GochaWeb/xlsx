import xlsx from 'xlsx';
import XLSX from "xlsx";

const queryString = "XlSX Test";
let  wb;

const sheetName = ('gocha')
wb = {
    SheetNames : [],
    Sheets : {},
    Props : {}
}

wb.SheetNames.push(sheetName);
wb.Props.Title = sheetName;

const ws = wb.Sheets[sheetName] =
    xlsx.utils.aoa_to_sheet([
        ['GSS'], [sheetName], ['period', '01/01/2023', '12/31/2023'], ['documentType', 'Test'],['']
    ]);

if (queryString) {
    xlsx.utils.sheet_add_aoa(ws, [[
        queryString
    ]], {origin: -1});
}

XLSX.writeFile(wb,"gocha.XLSX")
