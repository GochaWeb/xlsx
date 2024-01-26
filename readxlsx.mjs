import XLSX from 'xlsx';
import fetch from 'node-fetch';


async function processFile() {
    const url = 'https://docs.sheetjs.com/typedarray/iris.xlsx';

    const response = await fetch(url);
    const fileBuffer = await response.arrayBuffer();

    const workbook = XLSX.read(new Uint8Array(fileBuffer), {dense: true});
    const sheetnames = workbook.SheetNames;
    const ws = workbook.Sheets[sheetnames[0]];
    // console.log(ws["!ref"])
     // for(let col in ws){
     //     console.log(col)
     // }

    const headers = XLSX.utils.sheet_to_json(ws,{raw : false, header : 1, range: 'A1:ZZ1'})[0];
console.log(headers)
   let records = XLSX.utils.sheet_to_json(ws,{raw : true, blankrows : '**'});


   // console.log(records);
   // XLSX.writeFile(newWorkbook, 'example_with_styles.xlsx');
}
processFile()

// function simpleStyles() {
//     var workbook = XLSX.utils.book_new();
//
//     const mystyle =  {
//         origin : "",
//         cellStyles : {
//             fill: {fgColor: {rgb: '008000'}},
//             font : {color: {rgb : 'FFFF00'}}
//         }
//     }
//
//     var ws = XLSX.utils.aoa_to_sheet([
//         ["A1", "B1", "C1"],
//         ["A2", "B2", "C2"],
//         ["A3", "B3", "C3"]
//     ], {cellStyles : true});
// console.log(ws["!protect"])
//     var newRowData = "gocha";
//
//     XLSX.utils.sheet_add_aoa(ws, [[newRowData]],{origin : -1});
//
//
//     const range = XLSX.utils.decode_range(ws['!ref']);
//
//     for (let R = range.s.r; R < range.e.r; R++) {
//         for (let C = range.s.c; C < range.e.c; C++) {
//             const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
//             const cell = ws[cellAddress];
//             ws[cellAddress].s = mystyle;
//
//             // console.log(cell);
//         }
//     }
//
//
//     XLSX.utils.book_append_sheet(workbook, ws, "SheetName");
//     XLSX.writeFile(workbook, 'example.xlsx');
// }

// simpleStyles()
