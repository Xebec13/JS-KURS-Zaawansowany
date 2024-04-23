let users = [
    {name: "John", age: 25, favoriteColor: "blue"},
    {name: "Jane", age: 30, favoriteColor: "red"},
    {name: "Doe", age: 20, favoriteColor: "green"},
    {name: "Anna", age: 17, favoriteColor: "yellow"},
    {name: "Mike", age: 30, favoriteColor: "pink"},
    {name: "Chris", age: 20, favoriteColor: "purple"},
    {name: "Eva", age: 25, favoriteColor: "orange"},
    {name: "Max", age: 30, favoriteColor: "brown"}
];

function areAllAdults(arr){
    let adultUsers = arr.every( arr => arr.age >= 18);
    return adultUsers
}
console.log(areAllAdults(users)); // false
