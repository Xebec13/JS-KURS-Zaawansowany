const truck = {
    _brand: null,
    _model: null,
    _topSpeed: 0,


    get topSpeed() {
        return this._topSpeed;
    },
    set topSpeed(newValue) {
        if (newValue > 0) {
            this._topSpeed = newValue;
        } else {
            console.log("Speed is to low");
        }
    },


    set brand(newValue) {
        this._brand = newValue;
    },
    get brand() {
        return this._brand;
    },

    set model(newValue) {
        this._model = newValue;
    },
    get model() {
        return this._model;
    },

}

truck.brand = "Monster"
truck.model = "Nie znam sie na modelach"
truck.topSpeed = 240

console.log(truck.brand);
console.log(truck.model);
console.log(truck.topSpeed);
