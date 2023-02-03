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

phone.value;

// [The unknown Type]
function render(document: unknown) {
    // Narrowing
    // typeof can only check for primitive types
    if (typeof document === 'string') {
        document.toUpperCase();
    }

    // instanceof is use for checking classess or object
    // if (document instanceof WordDocument) {

    // }

    // document.move();
    // document.fly();
    // document.whateverWeWant();
}

// [The Never Type] - means the function never returns

function processEvents(): never {
    while (true) {
        // Read a message from a queue
    }
}

// processEvents();
// console.log('Hello World'); // Unreachable

function reject(message: string): never {
    throw new Error(message);
}

// reject('...');
console.log('Hello World'); // Unreachable if 'never' is specified as type and the function is called before this line

// [Exercises]

// #1: Given the data below, define a type alias for representing users.

// letusers = [  {name:'Robin Correa',age:28,occupation:'Software engineer'},  {name:'Regina',age:27}]; //  occupation is optional

type User = {
    name: string,
    age: number,
    occupation?: string
}

// #2: Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
type Bird = {
    fly: () => void;
}

type Fish = {
    swim: () => void;
}

type Pet = Bird | Fish;

// #3: Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

// #4: Simplify the following code snippets:
/*
Before:
    let userInfo = getUser();

    console.log(userInfo && userInfo.address ? userInfo.address.street: undefined);

    let x = foo !== null && foo !== undefined ? foo:bar();

After:
    let userInfo = getUser();
    console.log(userInfo?.address?.street);

    let x = foo ?? bar();
*/

// #5 What is the problem in this piece of code?
/**
let value:unknown = 'a';
console.log(value.toUpperCase());

let value:unknown = 'a';
if (typeofvalue === 'string')
    console.log(value.toUpperCase());

[Summary]
- Using a type alias we can create a new name (alias) for a type. We often use type aliases to create custom types.

- With union types, we can allow a variable to take one of many types (eg number | string).

- With intersection types, we can combine multiple types into one (eg Draggable & Resizable).

- Using optional chaining (?.) we can simplify our code and remove the need for null checks.

- Using the Nullish Coalescing Operator we can fallback to a default value when dealing with null/undefined objects. 

- Sometimes we know more about the type of a variable than the TypeScript compiler. In those situations, we can use the as keyword to specify a different type than the one inferred by the compiler. This is called type assertion.

- The unknown type is the type-safe version of any. Similar to any, it can represent any value but we cannot perform any operations on an unknown type without first narrowing to a more specific type.

- The never type represents values that never occur. We often use them to annotate functions that never return or always throw an error.
*/