const globalVar = "I am global";
function testScope(){
    const localVar = "I am local";
    if(!false) {
        let blockVar = "I am block-scoped";
        console.log(blockVar);
        console.log(globalVar);
        console.log(localVar);
    }
    console.log(localVar);
    
}

// console.log(globalVar);
testScope();
