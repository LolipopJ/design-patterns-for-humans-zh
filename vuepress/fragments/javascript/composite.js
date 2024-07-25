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
// 准备员工个体
const john = new Developer("John Doe", 12000);
const flank = new Designer("Flank", 10000);

// 把他们添加到公司中
const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(flank);

console.log("净薪酬：", organization.getNetSalaries()); // 净薪酬：22000
// #endregion getNetSalaries
