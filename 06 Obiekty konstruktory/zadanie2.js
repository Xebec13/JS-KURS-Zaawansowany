class SafeConstructor {
    constructor(name) {
        if (this instanceof SafeConstructor== false) {
            return new SafeConstructor(name)
        }
        this.name = name;
    }
    showConstructor(){
        return `To jest nazwa konstruktora ${this.name}`
    }
}

let constructor = new SafeConstructor("Dupsko")
console.log(constructor.showConstructor());




function Constructor(name){
    if (this instanceof SafeConstructor== false) {
        return new SafeConstructor(name)
    }
    this.name = name;
    return `${this.name}`
}

let constructor1 = new Constructor("Pipsko")
console.log(constructor1);
