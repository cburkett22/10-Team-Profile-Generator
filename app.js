const inquirer = require("inquirer");
// const fs = require("fs");
// const axios = require("axios");
// const Employee = require("./lib/Employee");

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name (manager):"
    },
    {
        type: "input",
        name: "id",
        message: "Enter your ID number (manager):"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email (manager):"
    },
    {
        type: "input",
        name: "office",
        message: "Enter your office number (manager):"
    }
]).then(function(res) {
    // push id, email, and office number to html card
    // $("#name").text(res.name);
    // $("#id").text("ID: " + res.id);
    // $("#email").text("Email: " + res.email);
    // $("#office").text("Office: " + res.office);

    promptEngineer();
});

function promptEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineers name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineers ID number:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineers company email:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineers GitHub username:"
        }
    ]).then(function(res) {
        inquirer.prompt([
            {
                type: "checkbox",
                name: "moreEmp",
                message: "Are there anymore engineers?",
                choices: [
                    "Yes",
                    "No"
                ]
            }
        ]).then(function(res) {
            if (res.moreEmp == "Yes"){
                promptEngineer();
            }else{
                promptIntern();
            }
        });

        // push id, email, and github username to html card
        // $("#name").text(res.name);
        // $("#id").text("ID: " + res.id);
        // $("#email").text("Email: " + res.email);
        // $("#github").text("Github: " + res.github);
    });
};

function promptIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the interns name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the interns ID number:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the interns company email:"
        },
        {
            type: "input",
            name: "college",
            message: "What college does the intern attend?"
        }
    ]).then(function(res) {
        inquirer.prompt([
            {
                type: "checkbox",
                name: "moreInt",
                message: "Are there anymore interns?",
                choices: [
                    "Yes",
                    "No"
                ]
            }
        ]).then(function(res) {
            if (res.moreInt == "Yes"){
                promptIntern();
            }
        });

        // push id, email, and college username to html card
        // $("#name").text(res.name);
        // $("#id").text("ID: " + res.id);
        // $("#email").text("Email: " + res.email);
        // $("#college").text("College: " + res.college);
    });
};