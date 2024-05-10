let obj = {
    a:10,
    b:20
}

obj.c = 14;

console.log(obj);

Object.defineProperty(obj,'prop', {
    value: 'test',
    writable: true,
    configurable: true,
    enumerable: true,    
})

console.log(obj);
delete obj.prop
console.log(obj);


