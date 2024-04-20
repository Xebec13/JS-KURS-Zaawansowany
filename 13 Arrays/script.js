let tab = new Array(1, 2, 3, 4, 5, 6, 7, 8, "dupsko", [])
console.log(tab);

tab = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10]
]
console.log(tab[0]);
console.log(tab[0][0]);

tab = [
    { name: "Kasia", color: "Blue" },
    { name: "Wiktor", color: "Green" },
    { name: "Żegota", color: "Red" },
]

tab[0] = { name: "Bożydar", color: "Pink" }
tab.push({ name: "Bożydar", color: "Pink" })
console.log(tab);
console.log(tab[2]);
console.log(tab[tab.length - 1]);


tab = [1, 2, 3, 4, 5, 6]
tab.push(7)
tab.push(8)
let element = tab.pop()
console.log(element);
console.log(tab);
tab = tab.reverse()
console.log(tab);

tab = tab.concat([10, 11, 12, 13])
console.log(tab);

let strTab = tab.join("-|-")
console.log(strTab);

let newTab = new Array(5).fill(7) // tworzenie tablic z 5 miejscami i wypełniona 7
console.log(newTab);


tab = ["Ania", "Kasia", "Marlena"] // to jest za to o wiele bardziej elastyczne
for (i = 0; i < tab.length; i++) {
    const el = tab[i]
    console.log(el);
}
// to samo co wyżej Całkiem przyjemne
for (el of tab) {
    console.log(el);
}
console.log("\n");

tab.forEach(function(item,index,arr) {
    console.log(item);
})