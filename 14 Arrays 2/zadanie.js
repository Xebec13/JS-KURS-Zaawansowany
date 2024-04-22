function prependNumbers(arr){
    let count = arr[0] - 1;
    for(let i = count; i >= 0; i--){
        arr.unshift(i)
    }
    return arr
}

console.log(prependNumbers([2,1,3,5]));

