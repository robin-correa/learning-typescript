// [Type Aliases]

type Employee = {
    readonly id: number, // can't be modified
    name: string,
    retire: (data: Date) => void // function as param 
}

let employee1: Employee = {
    id: 1,
    name: "Robin",
    retire: (date: Date) => {
        console.log(date);
    }
};

// [Union Types]
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs('10kg');

// [Intersection Types]

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

// [Literal Types]
type Quantity = 50 | 100;

// Not refactored: let quantity: 50 | 100 = 100; //100 or 50 only
// Refactored
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// [Nullable Types]
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase);
    } else {
        console.log('Hello!')
    }
}

// [Optional Chaining]

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');

// [Nullish Coalescing Operator]

let speed: number | null = null;
let ride = {
    // Falsy (undefined, null, '', false, 0)
    // speed: speed !== null ? speed : 30
    // Simplified:
    speed: speed ?? 30

}

// [Type Assertions]
// let phone = document.getElementById('phone') as HTMLInputElement;
let phone = <HTMLInputElement>document.getElementById('phone');

phone.value
