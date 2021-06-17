class Employee{
    name: string;
    constructor(name: string) {
        this.name = name
    }
}


export class Programer extends Employee  {
    program() {}
}

class Manager extends Employee {
    manage() {}
}

class Accountant {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    audit() {}
    program() {}
}

let employee: Employee = new Accountant('Jack');

