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
