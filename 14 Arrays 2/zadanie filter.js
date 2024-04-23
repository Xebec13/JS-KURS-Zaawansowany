let users = [
    {name: "John", age: 25, favoriteColor: "blue"},
    {name: "Jane", age: 30, favoriteColor: "red"},
    {name: "Doe", age: 20, favoriteColor: "green"},
    {name: "Anna", age: 25, favoriteColor: "yellow"},
    {name: "Mike", age: 30, favoriteColor: "pink"},
    {name: "Chris", age: 20, favoriteColor: "purple"},
    {name: "Eva", age: 25, favoriteColor: "orange"},
    {name: "Max", age: 30, favoriteColor: "brown"}
];

function filterByAge(arr,age){
    let givenAge = age;
    return arr.filter(user => user.age === givenAge)
}
console.log(filterByAge(users,20));
