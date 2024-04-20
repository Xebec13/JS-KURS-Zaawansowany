let str = "a b c d e f g"
let str1 = str.split(":")
console.log(str1);


let data = "1 2 3 4 5 6 7".split(" ")
let result = data.join(":") // działą na tablicach
console.log(result); // 1:2:3:4:5:6:7

let str2 = "A B C D E F G H I J J J"
str2 = str2.replace("J", "Dupsko")
console.log(str2);

str2 = str2.replace(/J/g, "TEST") // Zmienia wszyskie lietry a nie tylko jedną
console.log(str2);

let str3 = "01234567890"
console.log(str3.substring(2)); // pobieramy od 2 liczby do końca 234567890
console.log(str3.substring(2, 6)); // pobieramy od 2 liczby d 2345

console.log(str3.substr(2, 5)); // tylko 5 cyfr ale od 2 liczone


let str4 = "Kasia ma Kota i Kasia ma też Psa";
console.log(str4.indexOf("i"));
console.log(str4.lastIndexOf("Psa"));

let str5 = str4.substring(str4.lastIndexOf("Kasia"))
console.log(str5);
