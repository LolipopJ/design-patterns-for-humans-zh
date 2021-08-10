// #region Employee
/**
 * Employee interface :
 *
 * constructor(name, salary)
 * getName()
 * setSalary()
 * getSalary()
 * getRoles()
 */

class Developer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    getRoles() {
        return this.roles;
    }

    develop() {
        /* */
    }
}

class Designer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    getRoles() {
        return this.roles;
    }

    design() {
        /* */
    }
}
// #endregion Employee

// #region Organization
class Organization {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getNetSalaries() {
        let netSalary = 0;

        this.employees.forEach((employee) => {
            netSalary += employee.getSalary();
        });

        return netSalary;
    }
}
// #endregion Organization

// #region getNetSalaries
// 定义新的雇员
const john = new Developer('John Doe', 12000);
const jane = new Designer('Jane', 10000);

// 添加雇员到组织中
const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log('薪金净额：', organization.getNetSalaries()); // 薪金净额：22000
// #endregion getNetSalaries
