// Requiring Employee class
const Employee = require("./Employee")

// extension of the Employee class with Engineer
class Engineer extends Employee {
    constructor (name, id, email, github) {
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

        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }

        //Engineer GitHub information
        this.github = github
    }

    //Function to return the role
    getRole() {
        return "Engineer"
    }

    //Function to return the GitHub
    getGithub() {
        return this.github
    }
}

// Module export for the Engineer class
module.exports = Engineer;