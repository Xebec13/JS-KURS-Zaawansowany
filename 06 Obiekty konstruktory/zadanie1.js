class Radio {
    constructor(brand, frequency, type) {
        this.brand = brand;
        this.frequency = frequency;
        this.type = type;
    }
    getDetails() {
        return `${this.brand}, o częstotliwości ${this.frequency}, ${this.type}`;
    }
}


const radio1 = new Radio("Marshall", "80Hz", "Bezprzewodowy")
const radio2 = new Radio("JBL", "100Hz", "Przewodowy")
const radio3 = new Radio("Beats", "40Hz", "Zwykły")

console.log(radio1.getDetails());
console.log(radio2.getDetails());
console.log(radio3.getDetails());