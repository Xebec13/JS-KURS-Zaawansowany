function addPropertyUsingDefineProperty(obj,name,value,writable=false,enumerable=false){
    let newObj = {}
    Object.defineProperty(newObj, name,{
        value,
        writable,
        enumerable,
    });
    return newObj
}

console.log(addPropertyUsingDefineProperty({},'prop',15,true,true));
