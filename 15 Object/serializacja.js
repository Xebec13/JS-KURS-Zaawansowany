let source = {
    str:'Hello',
    a:24,
    data:{
        b:111,
        arr:[1,2,3,4,5,6]
    },
    date: new Date()
}

let strData = JSON.stringify(source)
console.log(strData); // {"str":"Hello","a":24,"data":{"b":111,"arr":[1,2,3,4,5,6]},"date":"2024-05-09T16:23:09.081Z"}


let otherObj = JSON.parse(strData)
console.log(otherObj);

otherObj.date = new Date(otherObj.date)
console.log(otherObj);
console.log(otherObj.date instanceof Date); // true
