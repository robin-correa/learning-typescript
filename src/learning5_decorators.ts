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
class ProfileComponent {

}


