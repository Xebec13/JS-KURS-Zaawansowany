function bindToContext(fn,context){
    return fn.bind(context)
}

let animal = {
    sound:"woof",
    makeSound: function(){
        return `This animal makes a ${this.sound} sound`
    }
}
let boundMakeSound = bindToContext(animal.makeSound,animal)
console.log(boundMakeSound);
