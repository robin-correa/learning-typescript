// [Understanding the Problem]

/*
class KeyValuePair {
    constructor(public key: number, public value: string) { }
}

let pair = new KeyValuePair(1, 'Apple');
*/

// What is someone wanted to use a string value for the key?
// With the current implementation above, it's not allowed.
// Solution is to change the key to any:
// constructor(public key: any, public value: string) { }

// let pair = new KeyValuePair('1', 'Apple');
// The temp solution is to add new class:
/*
class StingKeyValuePair {
    constructor(public key: string, public value: string) { }
}

// If adding new class, there's really no end to this.
*/

// [Generic Classes] / Template classess in C++

class KeyValuePair<TKey, TValue> {
    constructor(public key: TKey, public value: TValue) {

    }
}

// Two generic type arguments
let pair = new KeyValuePair<string, string>('1', 'a');
console.log(pair.value);

// [Generic Functions]

// stand-alone functions
function wrapInArray<T>(value: T) {
    return [value];
}

// let numbers = wrapInArray('1'); // We can't pass string if function is not generic
let numbersArray = wrapInArray('1');
// or
// let numbersArray = wrapInArray(1);

class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value];
    }
}

let utils = ArrayUtils.wrapInArray(1);


// [Generic Interfaces]

// https://mywebsite.com/users
// https://mywebsite.com/products

interface Result<T> {
    data: T | null,
    error: string | null,
    third: string | null, // My extra param to solve compilation error
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: null, third: url }
}

interface UserAccount {
    username: string;
}

interface Product {
    title: string;
}

let result = fetch<UserAccount>('url');
console.log(result.data?.username);
