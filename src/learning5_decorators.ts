/*
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