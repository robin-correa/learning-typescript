
// [Importing]

import { Circle } from './shapes';
let circle = new Circle(1);

console.log(circle); // Circle { radius: 1 }

// [Default Exports]

import Store, { Format } from './storage';

let store = new Store();
console.log(store);
console.log(Format.Raw) // 0 (enum)
console.log(Format.Compressed) // 1 (enum)

// [Wildcard imports]
import * as Shapes from './shapes';

let circle2 = new Shapes.Circle(2);
console.log(circle2);

// [Re-exporting]

import { Rectangle, Triangle } from './allshapes';
let rectangle = new Rectangle;
console.log(rectangle);

let triangle = new Triangle;
console.log(triangle);

/*
Summary

We use modules to organize our code across multiple files.
Objects defined in a module are private and invisible to other modules unless exported.
We use export and import statements to export and import objects from various modules. These statements are part of the ES6 module format.
Over years, many module formats have been developed for JavaScript. Examples are CommonJS (introduced by Node), AMD, UMD, etc.
We can use the module setting in tsconfig to specify the module format the compiler should use when emitting JavaScript code. 

*/