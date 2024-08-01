class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`;
    }
    getAnnualSalary() {
        return this.salary;
    }
}

class Manager extends Employee {
    constructor(id, name, department, salary) {
        super(id, name, salary);
        this.department = department;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
    }
    increaseSalary(percentage) {
        this.salary += (this.salary * percentage) / 100;
        return this.salary;
    }
    getBonus() {
        return this.salary * 0.1;
    }
    getAnnualSalary() {
        return this.salary + this.getBonus();
    }
}

class Developer extends Employee {
    constructor(id, name, department, salary, experience) {
        super(id, name, salary);
        this.department = department;
        this.experience = experience;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}, Experience: ${this.experience}`;
    }
    increaseSalary(percentage) {
        this.salary += (this.salary * percentage) / 100;
        return this.salary;
    }
    getBonus() {
        return this.salary * 0.05;
    }
    getAnnualSalary() {
        return this.salary + this.getBonus();
    }
}

let employee1 = new Employee(1111, "raj", 30000);
console.log(employee1.getDetails());

let manager1 = new Manager(2222, "raj", "Finance", 50000);
console.log(manager1.getDetails());

let developer1 = new Developer(3333, "raj", "IT", 30000, `2 year`);
console.log(developer1.getDetails());
console.log(developer1.getBonus());

console.log(employee1.getAnnualSalary());
console.log(manager1.getAnnualSalary());
console.log(developer1.getAnnualSalary());