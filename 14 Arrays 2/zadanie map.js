// zadanie by zwrocic tylko imiona z ponizszej tablicy
let users = [
    {name: "John", age: 25, favoriteColor: "blue"},
    {name: "Jane", age: 30, favoriteColor: "red"},
    {name: "Doe", age: 20, favoriteColor: "green"}
];

function extractNames(arr){
    return arr.map(arr => arr.name)
}

console.log(extractNames(users));
