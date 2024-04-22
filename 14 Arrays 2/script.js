let tab = ['Ania', 'Ola', 'Maciek', 'Adam', 'Żegota', 'Dominik'];
let pos = tab.indexOf("Adam") // znajdowanie indexu jaki ma Adam w Tablicy 
console.log(pos);
console.log(tab.includes("Adam")); // zwraca true lub false

tab = tab.sort(); // sortuje tablice
console.log(tab);

let nTab = [1,10,9,8,6,12,21,56,123]
nTab = nTab.sort();
console.log(nTab);


// ponizej te same rozwiazania jak sortowac liste 
nTab1 = nTab.sort(function (a,b){
    return a - b
})

nTab = nTab.sort((a,b) => {
    return a-b
})


console.log(nTab1);
console.log(nTab);


let nTab2 = [1,2,3,4,5,10,11,30,16,50,63]
nTab2.unshift(-3,-2,-11,-30,25)
console.log(nTab2);
let firstEl = nTab2.shift();
console.log(firstEl);

let data1 = ['a', 'b', 'c', 'd','f','g']
let splicedData = data1.splice(2,3,'j','dupa') 
console.log(splicedData); // tablica skasowanych elementów [ 'c', 'd', 'f' ]
console.log(data1);
 