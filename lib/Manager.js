// Requiring Employee class
const Employee = require("./Employee")

// extension of the Employee class with Manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
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

        if (typeof officeNumber !== "number" || isNaN(officeNumber)) {
            throw new Error("Expected parameter 'officeNumber' to be a number");
        }

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