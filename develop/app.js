const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const myTeam = [];

promptEmployee();
function promptEmployee() {
    inquirer.prompt([
        {
            type: "checkbox",
            name: "role",
            message: "What is the employee's role you are creating?",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            type: "input",
            name: "name",
            message: "Enter employee's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee's ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee's email:"
        }
    ]).then(function(preInfo) {
        if (preInfo.role == "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "office",
                    message: "Enter the managers office number:"
                },
                {
                    type: "checkbox",
                    name: "addMem",
                    message: "Would you like to add another team member?",
                    choices: [
                        "Yes",
                        "No"
                    ]
                }
            ]).then(function(res) {
                preInfo.office = res.office;

                const manager = new Manager(preInfo.name, preInfo.id, preInfo.email, preInfo.office);
                myTeam.push(manager);

                if (res.addMem == "Yes") {
                    promptEmployee();
                } else {
                    fs.writeFile(outputPath, render(myTeam), function(err){
                        if (err) {
                            throw err;
                        }
                    });
                }
            });
        } else if (preInfo.role == "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "Enter the Engineer's GitHub username:"
                },
                {
                    type: "checkbox",
                    name: "addMem",
                    message: "Would you like to add another team member?",
                    choices: [
                        "Yes",
                        "No"
                    ]
                }
            ]).then(function(res) {
                preInfo.github = res.github;

                const engineer = new Engineer(preInfo.name, preInfo.id, preInfo.email, preInfo.github);
                myTeam.push(engineer);

                if (res.addMem == "Yes") {
                    promptEmployee();
                } else {
                    fs.writeFile(outputPath, render(myTeam), function(err){
                        if (err) {
                            throw err;
                        }
                    });
                }
            });
        } else if (preInfo.role == "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "college",
                    message: "Enter the Intern's college:"
                },
                {
                    type: "checkbox",
                    name: "addMem",
                    message: "Would you like to add another team member?",
                    choices: [
                        "Yes",
                        "No"
                    ]
                }
            ]).then(function(res) {
                preInfo.college = res.college;

                const intern = new Intern(preInfo.name, preInfo.id, preInfo.email, preInfo.college);
                myTeam.push(intern);

                if (res.addMem == "Yes") {
                    promptEmployee();
                } else {
                    fs.writeFile(outputPath, render(myTeam), function(err){
                        if (err) {
                            throw err;
                        }
                    });
                }
            });
        }
    });
};