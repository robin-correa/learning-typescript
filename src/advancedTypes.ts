// [Type Aliases]

type Employee = {
    readonly id: number, // can't be modified
    name: string,
    retire: (data: Date) => void // function as param 
}

let employee1: Employee = {
    id: 1,
    name: "Robin",
    retire: (date: Date) => {
        console.log(date);
    }
};

// [Union Types]
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs('10kg');

// [Intersection Types]

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

// [Literal Types]
type Quantity = 50 | 100;

// Not refactored: let quantity: 50 | 100 = 100; //100 or 50 only
// Refactored
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';