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
        return this.firstName + '' + this.lastName;
    }

    walk() {
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