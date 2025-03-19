const fs = require('fs');
const xlsx = require('xlsx');

const resultsFile = 'test-results.json';
const excelFile = 'test-results.xlsx';

if (fs.existsSync(resultsFile)) {
    const testResults = JSON.parse(fs.readFileSync(resultsFile));
    const ws = xlsx.utils.json_to_sheet(testResults);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Test Results");
    xlsx.writeFile(wb, excelFile);
    console.log("Laporan berhasil dibuat: " + excelFile);
} else {
    console.log("File hasil tes tidak ditemukan!");
}
