// Requiring Employee class
const Employee = require("./Employee")

// extension of the Employee class with Engineer
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)

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