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
            promptGithub();
        }else if (role == "Engineer"){
            // run function
            promptGithub();
        }else if (role == "Intern"){
            // run function
            promptSchool();
        }

});

function promptGithub() {
    inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username:"
        }
    ]).then(function(userInput){
        // push username to html card
        // $("#id").text("GitHub: " + userInput.username);
    });
};

function promptSchool() {
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What college do you attend?"
        }
    ]).then(function(userInput){
        // push username to html card
        // $("#id").text("College: " + userInput.school);
    });
};