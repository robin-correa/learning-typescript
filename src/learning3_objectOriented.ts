/**
[Object Oriented Programming]

Known Programming Paradigms
- Procedural
- Functional
- Object-oriented
- Event-driven
- Aspect-oriented
 */

// [Creating Classes]

class Account {
    nickname?: string; // Optional

    // Returns only the instance of this class
    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number) {
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this._balance += amount;
    }

    get balance(): number {
        return this._balance;
    }

    /*
    set balance(value: number) {
        if (value < 0) {
            throw new Error('Invalid value');
        }

        this._balance = value;
    }
    */
}

// [Creating Objects]
let account = new Account(1, 'Robin', 0);
account.deposit(21);
console.log(account.balance);
console.log(account instanceof Account); // true

// [Index Signatures] - for creating property dynamically
class SeatAssignment {
    // A1, A2, ...
    // A1: string;
    // A2: string;
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Robin';
seats.A2 = 'Regina';

// [Static Members] - Static properties become part of class and will only have single instance of them in memory.
class Ride {
    // passenger
    // pickupLocation
    // dropOffLocation

    private static _activeRides: number = 0;

    start() {
        Ride._activeRides++
    }

    stop() {
        Ride._activeRides--;
    }

    static get activeRides() {
        return Ride._activeRides;
    }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides); // 2

// [Inheritance]
class Person {
    constructor(public firstName: string, public lastName: string) {

    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    // private - can access inside the class BUT cannot access outside (CANNOT be inherited)
    // protected - can access anywhere in the class (CAN be inherited)
    protected walk() {
        console.log('Walking..')
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log('Taking a test');
    }
}

let student = new Student(1, 'Robin', 'robin.correa21@gmail.com');
console.log(student.firstName);

// [Method Overriding]

class Teacher extends Person {
    override get fullName() {
        return 'Professor ' + super.fullName;
    }
}

let teacher = new Teacher('John', 'Smith');
console.log(teacher);

// [Polymorphism] - Person object is taking many different forms and acting polymorphically
// Enhanced the program without single change in the printNames()
// Open-Closed Principle (SOLID)

function printNames(people: Person[]) {
    for (let person of people) {
        console.log(person.fullName)
    }
}

class Principal extends Person {
    override get fullName() {
        return 'Principal  ' + super.fullName;
    }
}

printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Robin', 'Correa'),
    new Principal('Regina', 'Correa'),
]);

// [Abstract Classes and Methods]

abstract class Shape {
    constructor(public color: string) {
    }

    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    render(): void {
        console.log('Rendering a circle');
    }
}

// let shape = new Shape('red'); // Shape is not a real thing like a circle.
let shape = new Circle(21, 'red');
shape.render();

// [Interfaces]

// Example: Calendars

// abstract class Calendar {
//     constructor(public name: string) { }

//     abstract addEvent(): void;
//     abstract removeEvent(): void;
// }

interface Calendar {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalendar extends Calendar {
    sync(): void;
}

// Concrete class
class GoogleCalendar implements Calendar {
    constructor(public name: string) { }

    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}

/**
    Interfaces vs Types

    In TypeScript, interfaces and type aliases can be used interchangeably. Both can be used to describe the shape of an object

    Interface

    interface Person {
        name:string;
    }

    let person: Person = {
        name:'Robin',
    };

    Type

    type Person = {
        name:string;
    };
    
    let person: Person = {
        name: 'Mosh',
    };

    
    A class can also implement an interface or a type alias: 
    
    class MyCalendar implements MyInterface {} 
    class MyCalendar extends MyType {} 
    
    It's more conventional to use an interface in front of the extends keyword, though.
 */
