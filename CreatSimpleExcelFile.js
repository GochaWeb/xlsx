const XLSX = require("xlsx");

let data = [
    ["S", "h", "e", "e", "t", "J", "S"],
    [1, 2, null, null, 5, 6, 7],
    [2, 3, null, null, 6, 7, 8],
    [3, 4, null, null, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 0]
];
let ws = XLSX.utils.aoa_to_sheet(data);
let wb = XLSX.utils.book_new();

XLSX.utils.sheet_add_aoa(ws, [ "gocha".split("") ], {origin: -1});

XLSX.utils.book_append_sheet(wb, ws, "newSheet");
XLSX.writeFile(wb, "example.xlsx");
