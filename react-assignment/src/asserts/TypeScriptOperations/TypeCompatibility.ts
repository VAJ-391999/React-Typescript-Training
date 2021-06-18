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

interface MyEvent {
    type: string;
}

interface MyMouseEvent extends MyEvent {
    x: number;
    y: number;
}

function listenEvent(eventName: string, callback: (e: MyMouseEvent) => void) {
    const event = {type: 'some-event-type', x: 1, y: 2 };
    callback(event);
}

listenEvent('click', (e: MyEvent) => {});


function invokeLater(args: any[], callback: (...args: any[]) => void) { 
    /**... */
}

//Unsound - invokeLater "might" provide any number of arguments
invokeLater([1,2], (x,y) => console.log(x + ',' + y));

//Confusing(a and y are actually required) and undiscoverable
invokeLater([1,2], (x?, y?) => console.log(x + ',' + y));

function x(a: number): number; 
function x(a: string): string;
function x(a: number | string) {
    return a;
}

function y(a: boolean): boolean;
function y(a: number): number; 
function y(a: string): string;
function y(a: number | string | boolean) {
    return a;
}

let xFunc: typeof x = y;

//let yFunc: typeof y = x; error


enum Status {
    Ready, //0
    Waiting, //1
}

let someNumber: number = Status.Ready;

enum Color {
    Red,
    Blue,
    Green,
}

let sp = Status.Ready;
//s = Color.Red; errror

class Animal {
    feet: number;
    public static hello() {}
    constructor(name: string, numFeet: number){
        this.feet = numFeet;
    }
}

class Size {
    feet: number;
    constructor(numFeet: number) {
        this.feet = numFeet
    }
}

let a: Animal = new Animal('cat', 4);
let s: Size = new Size(4);

a = s; //ok
s = a; //ok

class A {
    a: string;
    private b : number;
    constructor(a: string, b: number) {
        this.a = a;
        this.b = b;
    }
}

class SubclassA extends A {} 

class B {
    a: string;
    private b : number;
    constructor(a: string, b: number) {
        this.a = a;
        this.b = b;
    }
}

class SubclassB extends B {}

let classA = new A('A', 1)
let classB = new B('B', 2)

let subclassA = new SubclassA('SUBCLASS A', 1);
let subclassB = new SubclassB('SUBCLASS B', 2);

//classA = classB error
//classB = classA error
classA = subclassA
classB = subclassB