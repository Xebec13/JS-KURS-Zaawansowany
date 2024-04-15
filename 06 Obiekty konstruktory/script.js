let date = new Date();

console.log(date);

function Car(brand, name,color){
    this.brand = brand;
    this.name = name;
    this.color = color;
    this.year = 2005;


    this.printData = function () {
        console.log(this.brand, this.name, this.color, this.year);
    }
}
let car1 = new Car("Ford", "Mustang","Pink")

console.log(car1);
car1.printData();

// class Car {
//     constructor(brand, name, color) {
//         this.brand = brand;
//         this.name = name;
//         this.color = color;
//         this.year = 2005;


//         this.printData = function () {
//             console.log(this.brand, this.name, this.color, this.year);
//         };
//     }
// }