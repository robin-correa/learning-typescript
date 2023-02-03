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

// account.id = "123"; // compilation error due to readonly