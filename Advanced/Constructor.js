class StaticStudents {

    constructor(name, age, experience) {
        this.Name = name;
        this.Age = age;
        this.Experience = experience;
    }

    displayDetails() {
        console.log("Name : " + this.Name);
        console.log("Age : " + this.Age);
        console.log("Experience : " + this.Experience);
    }
}

let obj1 = new StaticStudents("Sabari Vivek", 25, 4.5);
obj1.displayDetails();

let obj2 = new StaticStudents("Anu Vivek", 24, 2.6);
obj2.displayDetails();