// [Arrays]

// To initialize empty array, must put the data type
let numbers: number[] = [];

// [Tuples] - useful with only have 2 values / key-value pair

let user: [number, string] = [1, 'Robin']

// [Enums]
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize)

// [Functions]
// Set default values, properly annotate your functions, no implicit returns
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }

    return income * 1.4
}

calculateTax(10_000);

// [Objects]

let employee: {
    readonly id: number, // can't be modified
    name: string,
    retire: (data: Date) => void // function as param
} = {
    id: 1,
    name: "Robin",
    retire: (date: Date) => {
        console.log(date);
    }
};

/*
Summary

- Since TypeScript is a superset of JavaScript, it includes all the built-in types in JavaScript (eg number, string, boolean, object, etc) as well as additional types (eg any, unknown, never, enum, tuple, etc).

- In TypeScript, we set the type of our variables by annotating them.

- The any type can represent any kind of value. It’s something we should avoid as much as possible because it defeats the purpose of using TypeScript in the first place. A variable of type any can take any kind of value! 

- Tuples are fixed-length arrays where each element has a specific type. We often use them for representing two or three related values. 

- Enums represent a list of related constants.

*/