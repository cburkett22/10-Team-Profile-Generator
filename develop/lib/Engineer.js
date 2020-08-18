const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super("Engineer", name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;