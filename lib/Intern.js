// Requiring Employee class
const Employee = require("./Employee")

// extension of the Employee class with Intern
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)

        //Intern school information
        this.school = school
    }

    //Function to return the role
    getRole() {
        return "Intern"
    }

    //Function to return the School
    getSchool() {
        return this.school
    }
}

// Module export for the Intern class
module.exports = Intern;
