function updateNumberInArray(arr,arrIndex,newNumber){
    if(arrIndex < 0 || arrIndex >= arr.length) {
        return arr
    }
    arr.splice(arrIndex, 1, newNumber)
    return arr
}

console.log(updateNumberInArray([2,3,2],0,4));
