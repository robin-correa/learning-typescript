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