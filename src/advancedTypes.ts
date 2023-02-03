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