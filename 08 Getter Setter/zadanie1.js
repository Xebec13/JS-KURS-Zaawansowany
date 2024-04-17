const person = {
    _firstName: null,
    _lastName: null,
    _age: 0,


    get firstName() {
        return this._firstName
    },
    set firstName(newName){
        this._firstName = newName;
    },
    get lastName() {
        return this._lastName
    },
    set lastName(newName){
        this._lastName = newName;
    },
    fullName() {
        return `${this._firstName} ${this._lastName}`;
    },


    get getAge(){
        return this._age;
    },
    set setAge(newAge){
        if(isNaN(newAge) || newAge < 1 || !Number.isInteger(newAge)){
            console.log("Wiek jest za mały lub nie jest liczbą");
        }else {
            this._age = newAge;
        }
    },  
};

person.firstName = "John"
person.lastName = "Doe"
person.setAge = 20.5

console.log(person.firstName);
console.log(person.lastName);
console.log(person.getAge);
console.log(person.fullName());

