let arr = ['Ola', 'Ania', 'Magda', 'Bożydar']
let newArr = arr.map(function(value,index,arr){
    return value + "!"
})
console.log(newArr); // [ 'Ola!', 'Ania!', 'Magda!', 'Bożydar!' ]


newArr = arr.map((value,index) => value + "$")
console.log(newArr); // [ 'Ola$', 'Ania$', 'Magda$', 'Bożydar$' ]


let nArr = [1,2,3,4,5,6,7,8,9,10].map(Math.sqrt)
console.log(nArr);

let filterd = arr.filter( function(v) {
    return v.length >= 4;
})
console.log(filterd);

let reduced = [1,2,3,4,5,6,7,8,9,10].reduce(function(acc,currValue,index,arr){
    return acc + currValue
})
console.log(reduced);

const arr2 = [1,2,3,4,5,6,7,8,9]
console.log(arr2.every(v => v > 0)); // true
console.log(arr2.every(v => v > 3)); // false 
