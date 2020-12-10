const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//empty array to stock the employee objects
const employees = []

//questions object for the inquirer prompt
const questions = [
    {
        type: "input",
        message: "Employee name:",
        name: "name"
    },
    {
        type: "list",
        message: "Please choose employee role:",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role"
    },
    {
        type: "input",
        message: "Enter employee id (must be a number):",
        name: "id"
    },
    {
        type: "input",
        message: "Employee email:",
        name: "email"
    }
]

//Function to start adding employees
function addEmployee() {
    inquirer.prompt(questions).then(function(response){
        //Variable with the employee name
        let nameEmployee = response.name
        //Variable with the employee role
        let roleEmployee = response.role
        //Variable with the employee id
        let idEmployee = response.id
        //Variable with the employee email
        let emailEmployee = response.email

        //Variable to ask for the bonus role question
        let bonusRole = ""

        //Adapt the bonus role question to each employee types
        if (roleEmployee === "Manager") {
            bonusRole = "office phone number"
        } else if (roleEmployee === "Intern") {
            bonusRole = "school name"
        } else {
            bonusRole = "Github username"
        }

        //Questions for the bonus role and to continue adding employees
        inquirer.prompt([
            {
                type: "input",
                message: `Enter your ${roleEmployee} ${bonusRole}:`,
                name: "bonusRole",
            },
            {
                type: "list",
                message: "Do you need to add more employee?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreEmployee"
            }
        ])
        .then(function(response){
            //Variable with the employee bonus role answer
            let bonusRoleEmployee = response.bonusRole
            //Variable to stock the answer to adding more employees
            let moreEmployee = response.moreEmployee

            //function to print the object into the employee array
            function printEmployee() {
                if (roleEmployee === "Manager") {
                    //Manager constructor
                    let printEmployee = new Manager(nameEmployee, idEmployee, emailEmployee, bonusRoleEmployee)
                    //Manager constructor pushed to the employees array
                    employees.push(printEmployee)
                } else if (roleEmployee === "Intern") {
                    //Intern constructor
                    let printEmployee = new Intern(nameEmployee, idEmployee, emailEmployee, bonusRoleEmployee)
                    //Intern constructor pushed to the employees array
                    employees.push(printEmployee)
                } else {
                    //Engineer constructor
                    let printEmployee = new Engineer(nameEmployee, idEmployee, emailEmployee, bonusRoleEmployee)
                    //Engineer constructor pushed to the employees array
                    employees.push(printEmployee)
                }
            }

            //Function to generate the html page
            function renderHtml() {
                fs.writeFile('team.html', render(employees), (err) =>
                err
                ? console.error(err)
                : console.log('Success!')
            );
            }

            //If "yes" to add employees: printEmployee() and continue with addEmployee()
            if (moreEmployee === "yes") {
                printEmployee()
                addEmployee()
            } 
            //If "no" to add employees: printEmployee() and renderHtml() page
            else {
                printEmployee()
                renderHtml()
            }
        })
    }) 
}

addEmployee()