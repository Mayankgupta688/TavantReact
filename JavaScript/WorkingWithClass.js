class Employee {
    constructor(name, age, salary) {
        this.empName = name;
        this.empAge = age;
        this.empSalary = salary;
    }

    getUserName() {
        console.log(this.userName);
    }
}

var employeeOne = new Employee("Mayank", 20, 10);

employeeOne.getUserName();

var employeeTwo = new Employee("TechnoFunnel", 20, 10);

employeeTwo.getUserName();