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
    readonly id: number; // [Readonly modifier]
    owner: string;
    private _balance: number;
    nickname?: string; // Optional

    // Returns only the instance of this class
    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this._balance += amount;
    }

    getBalance(): number {
        return this._balance;
    }
}

// [Creating Objects]
let account = new Account(1, 'Robin', 0);
account.deposit(21);
console.log(account.getBalance());
console.log(account instanceof Account); // true

// account.id = "123"; // compilation error due to readonly