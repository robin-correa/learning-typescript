/*
Note: Must comment out "noUnusedParameters": true in tsconfig for this lesson.

class Component {
    insertInDOM() {

    }
}

class ProfileComponent extends Component{

}

*/

// [Class Decorators]
function Component(constructor: Function) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
    }
}

@Component
class ProfileComponent1 { }


// [Parametized Decorators]

type ComponentOptions = {
    selector: string
}

// Decorator Factory - will act as factory for creating decorator
function ParentComponent(value: ComponentOptions) {
    return (constructor: Function) => {
        console.log('Component decorator called');
        constructor.prototype.options = value;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        }
    }
}

@ParentComponent({ selector: '#my-profile' })
class ProfileComponent2 { }

// [Decorator Composition]

function Pipe(constructor: Function) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe
}

@ParentComponent({ selector: '#my-profile' })
@Pipe
class ProfileComponent3 { }

// [Method Decorators]
/*
function Log(target: any, methodName: string, descriptor: PropertyDecorator) {
    const original = descriptor.value as Function;
    descriptor.value = function (...args: any) {
        console.log('Before');
        original.call(this, ...args)
        console.log('After');
    }
}
class PersonClass1 {
    @Log
    say(message: string) {
        console.log('Person says ' + message);
    }
}

let person = new PersonClass1();
person.say('Hello')
*/

// [Accessor Decorators]

/*
function Captalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        // if (original !== null && original !== undefined) {
        //     original?.call(this);
        // }
        const result = original?.call(this);
        return (typeof result === 'string') ? result.toUpperCase() : result;
    }
}

class PersonClass2 {
    constructor(public firstName: string, public lastName: string) { }

    @Captalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new PersonClass2('Robin', 'Correa');
console.log(person.fullName);
*/

// [Property Decorators]

function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;

        const descriptor: PropertyDescriptor = {
            get() { return value; },
            set(newValue: string) {
                if (newValue.length < length) {
                    throw new Error(`${propertyName} should be at least ${length} characters long`);
                }

                value = newValue;
            }
        };

        Object.defineProperty(target, propertyName, descriptor);
    }
}

class UserClass1 {
    @MinLength(4)
    password: string;

    constructor(password: string) {
        this.password = password;
    }
}

let userObj1 = new UserClass1('1234');
// userObj1.password = '123'; // Error / Validation error (Runtime)
console.log(userObj1.password); // 1234

// [Parameter Decorators]

type WatchedParameter = {
    methodName: string,
    parameterIndex: number
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
    watchedParameters.push({
        methodName,
        parameterIndex
    });

}

class Vehicle {
    move(@Watch speed: number) {

    }
}

console.log(watchedParameters); // [ { methodName: 'move', parameterIndex: 0 } ]

/*
Summary

- Decorators are often used in frameworks (eg Angular, Vue) to chance and enhance classes and how they behave.

- We can apply decorators on classes, properties, methods, parameters, and accessors (getters and setters).

- A decorator is just a function that gets called by the JavaScript runtime. In that function, we have a chance to modify a class and its members.

- To use decorators, we have to enable the experimentalDecorators setting in tsconfig.

- We can apply more than one decorator to a class or its members. Multiple decorators are applied in the reverse order. 

*/