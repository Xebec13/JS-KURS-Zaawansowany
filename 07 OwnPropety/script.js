function inspectProperties(obj) {
    let result = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result.push(`Property: ${prop}, Value: ${obj[prop]}`);
        }
    }
    return result;
}

// Przykładowy obiekt
const exampleObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Wywołanie funkcji inspectProperties dla obiektu exampleObject
console.log(inspectProperties(exampleObject));


class Car {
    constructor(brand, model, name) {
        this.brand = brand;
        this.model = model;
        this.name = name;
    }
    showInfo(){
        return `Marka ${this.brand} modelu ${this.model}, ${this.name}`
    }  
}


let car1 = new Car("Ford","Mustang","Andrzej")
let car2 = new Car("Marshal","Maniek","Janusz")
console.log(car1.showInfo());
console.log(car2.showInfo());
