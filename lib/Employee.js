// Definition of the Employee class
class Employee {
    constructor (name, id, email) {
        //If parameter aren't good, throw error messages

        //Employee information
        this.name = name
        this.id = id
        this.email = email
    }

    //Function to return the name
    getName() {
        return this.name
    }

    //Function to return the id
    getId() {
        return this.id
    }

    //Function to return the email
    getEmail() {
        return this.email
    }

    //Function to return the role
    getRole() {
        return 'Employee'
    }
}

// Module export for the Employee class
module.exports = Employee;