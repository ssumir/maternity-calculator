/* script.js */
document.getElementById('calculateButton').addEventListener('click', function() {
    const monthlySalary = parseFloat(document.getElementById('monthlySalary').value) || 0;
    const allowances = parseFloat(document.getElementById('allowances').value) || 0;

    const totalMonthlyWage = monthlySalary + allowances;
    const averageDailyWage = totalMonthlyWage / 30;
    const maternityBenefit = averageDailyWage * 120;

    const resultWindow = window.open('', '_blank', 'width=400,height=300');
    resultWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Maternity Benefit Result</title>
            <link rel="stylesheet" href="styles.css">
            <style>
                @media print {
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body class="bg-gray-100 min-h-screen flex items-center justify-center">
            <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 class="text-2xl font-bold mb-4 text-center">Maternity Benefit</h1>
                <p class="text-lg text-center text-green-600 font-bold">BDT ${maternityBenefit.toFixed(2)}</p>
                <div class="flex justify-center space-x-4 mt-4 no-print">
                    <button onclick="window.print()" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Print</button>
                    <a href="javascript:window.close()" class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Close</a>
                </div>
            </div>
        </body>
        </html>
    `);
});
