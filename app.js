const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const Employee = require("./lib/Employee");

inquirer.prompt([
    // refer to README line 20 for prompts
    {
        type: "",
        name: "",
        message: "",
        choices: [
            "choice1",
            "choice2"
        ]
    }
    // "name"
]).then(function({ name }) {
    // if "name" == certain "choice"
    if (name == choice1){
        // run function
    // if "name" == certain "choice"
    }else if (name == choice2){
        // run function
    }
});