const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer.prompt([
    // refer to README line 20 for prompts
    {
        type: "",
        name: "",
        message: "",
        choices: [
            "",
            ""
        ]
    }
    // "name"
]).then(function({ name }) {
    // if "name" == certain "choice"
    if (name == choice1){
        // run function
    // if "name" == certain "choice"
    }else if (name == choice1){
        // run function
    }
});