let sampleObj = {
    name: "John",
    age: 25,
    isStudent: true
};

function enumeratePropertiesUsingEntries(obj){
    let objEntries = Object.entries(obj);
    let result = []
    for (const [key,value] of objEntries) {
        result.push({propertyName: key, dataType: typeof value});
    }
    return result
}

console.log(enumeratePropertiesUsingEntries(sampleObj));
