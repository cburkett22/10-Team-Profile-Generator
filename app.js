const inquirer = require("inquirer");
// const fs = require("fs");
// const axios = require("axios");
// const Employee = require("./lib/Employee");

inquirer.prompt([
    {
        type: "input",
        name: "id",
        message: "What is your employee ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your employee email?"
    },
    {
        type: "checkbox",
        name: "role",
        message: "What is your role?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    }
]).then(function({ role }) {
        if (role == "Manager"){
            // run function
        }else if (role == "Engineer"){
            // run function
        }else if (role == "Intern"){
            // run function
        }

});