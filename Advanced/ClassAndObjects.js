class StaticStudents {

    setDetails() {
        this.Name = "Sabari Vivek";
        this.Age = 25;
        this.Experience = 4.5;
    }

    displayDetails() {
        console.log("Name : " + this.Name);
        console.log("Age : " + this.Age);
        console.log("Experience : " + this.Experience);
    }
}

class DynamicStudents {

    displayDetails(location, salary) {
        console.log("Location : " + location);
        console.log("Salary : " + salary);
    }
}

let obj1 = new StaticStudents();
obj1.setDetails();
obj1.displayDetails();

let obj2 = new DynamicStudents();
obj2.displayDetails("Chennai", "45 LPA");