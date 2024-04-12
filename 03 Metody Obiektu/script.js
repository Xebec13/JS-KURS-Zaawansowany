const school = {
    name: "Nazwa",
    city: "Miasto",
    students: [],
    addStudent: function (name, surname) {
        const obj = {
            name: name,
            surname: surname,
        }
        const index = this.students.length;
        this.students[index] = obj;
    },
    showStudents: function(){
        if(this.students.length == 0 ){
            console.log("Brak Studentów");
            return;
        }
        for(let i = 0; i< this.students.length; i++){
            const s = this.students[i];
            console.log(s.name, s.surname);
        }
    },
    showStudentsByName: function(name){
        if(this.students.length === 0 ){
            console.log("Brak Studentów");
            return;
        }console.log("Imiona studentów", name, ":");
        
        for(let i = 0; i< this.students.length; i++){
            const s = this.students[i];
            if(s.name === name) console.log(s.name, s.surname);
            
        }
    },
    getNumStudents: function(){
        return this.students.length;
        
    },
    resetStudents: function(){
        this.students = [];
    }


}

school.addStudent("Dupsko", "Cycu")
school.addStudent("Maciek", "Maćkowski")
school.addStudent("Maciek", "Maćkowski")
school["name"] = "143 Szkoła"
console.log(school.getNumStudents());
console.log(school.showStudents());
school.resetStudents();
console.log(school.showStudents());
school.addStudent("Maciek", "Imbirowicz")
console.log(school.showStudents());








