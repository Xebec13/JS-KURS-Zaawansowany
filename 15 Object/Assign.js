function mergeObjects(...args){
    let obj = {}
    return Object.assign(obj,...args)
}

let o1 = {name:'John',age:'25'}
let o2 = {name:'Jane',age:'30'}
let o3 = {name:'Anna',age:'20'}

console.log(mergeObjects(o1,o2,o3));
