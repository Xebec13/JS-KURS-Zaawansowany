function createComputer(args) {
    console.log(args);
}

let comp1 = {
    cpu: "amd",
    gpu: "nvidia",
    ram: "32gb",
    dysk: "1tb",
}

console.log(createComputer(comp1));

function createLaptop() {
    let comp2 = {
        ...comp1,
        type: "laptop",
        weight: "2.5",
    }
    console.log(comp2);
}

console.log(createLaptop(comp1));
