// Requiring Employee class
const Employee = require("./Employee")

// extension of the Employee class with Manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)

        //Manager office number information
        this.officeNumber = officeNumber
    }

    //Function to return the role
    getRole() {
        return "Manager"
    }

    //Function to return the GitHub
    getOfficeNumber() {
        return this.officeNumber
    }
}

// Module export for the Engineer class
module.exports = Manager;