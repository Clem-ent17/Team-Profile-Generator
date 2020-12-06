// Requiring Employee class
const Employee = require("./Employee")

// extension of the Employee class with Intern
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)

        //If parameter aren't good, throw error messages
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
  
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }

        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }

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
