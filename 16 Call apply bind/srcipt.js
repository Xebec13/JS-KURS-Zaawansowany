const employee = {
    name: 'Ola',
    printInfo: function(surname,city) {
        console.log(this.name, surname, city);
    }
}

const user = {name:"Adam"}

employee.printInfo("Kowalska","Wwa")


employee.printInfo.call(user, "Adamski", "Krakow")
employee.printInfo.apply(user, ["Kowalski", "Gdansk"]) // to samo co wyzej ale robi tablice z tego 


let userInfo = employee.printInfo.bind(user, "Zegota", "Szczecin")
userInfo()
