const employees = [
    { name: 'John', position: 'Manager', salary: 5000 },
    { name: 'Alice', position: 'Developer', salary: 4000 },
    { name: 'Bob', position: 'Designer', salary: 3500 }
];
const salaries = employees.map(employee => employee.salary);
console.log('employees salaries:', salaries);

const updatedEmployees = employees.map(employee => {
    if (employee.position === 'Developer') {
        const updatedSalary = employee.salary * 1.1; // Добавляем 10% к зарплате Developer
        return { ...employee, salary: updatedSalary };
    }
    return employee;
});
console.log('updatedEmployees:', updatedEmployees);
const namesAndPositions = employees.map(({ name, position }) => ({ name, position }));
console.log('namesAndPositions:', namesAndPositions);