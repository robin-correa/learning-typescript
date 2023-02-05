
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