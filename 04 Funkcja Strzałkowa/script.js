const multiply = (a,b) => a*b;
console.log(multiply(2,10));

const substract = (a,b) => {
    return a-b
}

console.log(substract(20,4));

let show = (...args) => console.log(args);
show(1,2,3,4,5,6,7,11)
console.log(show);
 

const dodawanie = (a,b) => (a+b)
console.log(dodawanie(3,2));
