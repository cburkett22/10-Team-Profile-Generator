const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, college) {
        super("Intern", name, id, email);
        this.college = college;
    }

    getSchool() {
        return this.college;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Intern;