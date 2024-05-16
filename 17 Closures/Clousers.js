let b = 30;
let c = 10;

function foo() {
    let b = 5
    c = -1
    console.log("b", b);

}
foo()
console.log(c);
console.log(b);

console.log("----------------------------------------------");

function createCounter() {
    let value = 0;
    function increment() {
        value++
    }
    function getValue(){
        return value
    }
    return {
        increment: increment,
        getValue: getValue
    }
}

const counter = createCounter()
counter.increment()
counter.increment()
console.log(counter.getValue());

