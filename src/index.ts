// [Arrays]

// To initialize empty array, must put the data type
let numbers: number[] = [];

// [Tuples] - useful with only have 2 values / key-value pair

let user: [number, string] = [1, 'Robin']

// [Enums]
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize)