function exportExcel() {
    let tbl = document.getElementById('sheetjs');
    let wb = XLSX.utils.table_to_book(tbl);
    XLSX.writeFile(wb, 'example.xlsx');
}
