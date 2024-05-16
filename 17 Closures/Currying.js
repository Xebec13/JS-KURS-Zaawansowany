function test(x) {
    return function (y){
        console.log(x,y);
    }
}

let show = test(12)
show(5) // 12 i 5 

function add(n){
    return function (m){
        return n + m
    }
   
}
const add2 = add(3)
console.log(add2(3));


