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
console.log(result); // { data: null, error: null, third: 'url' }

// [Generic Constraints]

class PersonClass {
}

class CustomerClass extends PersonClass {
}

function echo<T extends PersonClass>(value: T): T {
    return value;
}

echo(new CustomerClass);

// [Extending Generic Classes]

interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }
}

let store1 = new Store<Product>();
// store1.objects = [];

class CompressibleStore<T> extends Store<T> {
    compress() { }

}

let store2 = new CompressibleStore<Product>();
store2.compress()

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}

// Key takeaway: When extending a generic class:
// Fix the generic type parameter
// We can restrict it
// Simply pass it on the child class

// [The keyof Operator]

interface Product1 {
    name: string;
    price: number;
}

class Store1<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }
    // T is Product
    // keyof T => 'name' | 'price'
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value);
    }
}

let store3 = new Store1<Product1>();
store3.add({ name: 'a', price: 1 });
store3.find('name', 'a');
store3.find('price', 1);
// store3.find('nonExistingProperty', 1); // Compilation error

// [Type Mapping]

interface Product2 {
    name: string;
    price: number;
}

type ReadOnlyProduct = {
    // Index signature
    // keyof

    readonly [K in keyof Product2]: Product[K]
}

let product1: ReadOnlyProduct = {
    name: 'a',
    price: 1
}

// product.name = 'b'; // Compilation error / read only

type ReadOnly<T> = {
    // Index signature
    // keyof

    readonly [K in keyof T]: T[K]
}

type Optional<T> = {
    [K in keyof T]?: T[K]
}

type Nullable<T> = {
    [K in keyof T]?: T[K] | null
}

let product2: ReadOnly<Product2> = {
    name: 'a',
    price: 1
}

/* 
    Summary

    - Generics allow us to create reusable classes, interfaces and functions.
    - A generic type has one or more generic type parameters specified in angle brackets.
    - When using generic types, we should supply arguments for generic type parameters or let the compiler infer them (if possible).
    - We can constrain generic type arguments by using the extends keyword after generic type parameters. 
    - When extending generic classes, we have three options: can pass on generic type parameters, so the derived classes will have the same generic type parameters. Alternatively, we can restrict or fix them. 
    - The [keyof] operator produces a union of the keys of the given object.
    - Using type mapping we can create new types based off of existing types. For example, we can create a new type with all the properties of another type where these properties are readonly, optional, etc.
    - TypeScript comes with several utility types that perform type mapping for us. Examples are: Partial<T>, Required<T>, Readonly<T>, etc.
*/