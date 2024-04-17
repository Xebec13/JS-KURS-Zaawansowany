const user = {
    _name: null,

    set name(newValue) {
        if (newValue.length > 2) {
            this._name = newValue
        } else {
            console.log("Name is too short");
        }
    },
    get name () {
        return this._name;
    }
};

user.name = "Asia"
console.log(user.name);


