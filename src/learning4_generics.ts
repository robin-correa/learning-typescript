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
