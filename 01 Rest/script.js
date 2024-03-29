function foo(...params) {
    console.log(params);

}

foo(1, 2, 3, 4, 5, 11, 6, 7, 8, 9);

// --------------------------------------------------------------------Zadanie

function sumAll(...params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        if (typeof params[i] === 'number') {
            sum += params[i];
        }
    }
    return sum;
}

console.log(sumAll(2,2));
console.log(sumAll(2,2,2,3,4));
console.log(sumAll(2,2));
console.log(sumAll(2,2));
