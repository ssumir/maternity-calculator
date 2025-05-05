// Calculate Total Income automatically
const salaryInput = document.getElementById('lastMonthSalary');
const bonusInput = document.getElementById('bonus');
const othersInput = document.getElementById('others');
const totalIncomeInput = document.getElementById('totalIncome');

[salaryInput, bonusInput, othersInput].forEach((input) =>
    input.addEventListener('input', () => {
        const salary = parseFloat(salaryInput.value) || 0;
        const bonus = parseFloat(bonusInput.value) || 0;
        const others = parseFloat(othersInput.value) || 0;
        totalIncomeInput.value = salary + bonus + others;
    })
);

// Handle form submission
document.getElementById('maternityForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const employeeInfo = {
        employeeName: document.getElementById('employeeName').value,
        employeeId: document.getElementById('employeeId').value,
        cardNo: document.getElementById('cardNo').value,
        designation: document.getElementById('designation').value,
        category: document.getElementById('category').value,
        section: document.getElementById('section').value,
        dateOfJoining: document.getElementById('dateOfJoining').value,
        monthlySalary: document.getElementById('monthlySalary').value,
    };

    const maternityHistory = {
        dateOfSymptom: document.getElementById('dateOfSymptom').value,
        estimatedDeliveryDate: document.getElementById('estimatedDeliveryDate').value,
        leaveStartDate: document.getElementById('maternityLeaveStartDate').value,
        leaveEndDate: document.getElementById('maternityLeaveEndDate').value,
    };

    const takeHomeSalary = {
        salary: document.getElementById('lastMonthSalary').value,
        bonus: document.getElementById('bonus').value,
        others: document.getElementById('others').value,
        totalIncome: document.getElementById('totalIncome').value,
    };

    const attendanceDays = document.getElementById('attendanceDays').value;

    // Store data in localStorage
    localStorage.setItem('employeeInfo', JSON.stringify(employeeInfo));
    localStorage.setItem('maternityHistory', JSON.stringify(maternityHistory));
    localStorage.setItem('takeHomeSalary', JSON.stringify(takeHomeSalary));
    localStorage.setItem('attendanceDays', attendanceDays);

    // Open result page in a new window
    window.open('result.html', '_blank');
});
