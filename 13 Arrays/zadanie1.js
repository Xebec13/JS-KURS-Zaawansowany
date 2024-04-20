function squaredNumbers(arr) {
    let doubleArray = [];
    arr.forEach(element => {doubleArray.push(element * element);
    });
    return doubleArray;
}

console.log(squaredNumbers([2, 2]));