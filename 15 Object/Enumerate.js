let obj = {
    num: 123,
    str: 'text',
    printData: function(){
        console.log('Hello!');
    },
    arr: [1,2,3,4,5],
    data: {
        a:1,
        b:2
    }
};

const objKeyes = Object.keys(obj);
// console.log(objKeyes);

for (key of objKeyes) {
    console.log(`Key: ${key} and value: ${obj[key]}`);
    
}


const objValues = Object.values(obj);
// console.log(objValues);

const objEntries = Object.entries(obj);
console.log(objEntries);

for (const [key,value] of objEntries) {
    console.log(key,value);
    
}