function Newspaper(title) {
    this.title = title
    this.adverts = [];

    this.addAdvert = function (name, page) {
        this.adverts.push({
            name:name,
            page:page
        })
    }

    this.printAdverts = function () {
        for(let i = 0; i < this.adverts.length; i++) {
            const a = this.adverts[i];
            console.log("Adds: ", a.name, a.page);
            
        }
    }
}

const magazine1 = new Newspaper("It world")
magazine1.addAdvert("Comp", 3)
magazine1.addAdvert("PS4", 10)
magazine1.addAdvert("Laptop", 13)

magazine1.printAdverts()
console.log(magazine1);



