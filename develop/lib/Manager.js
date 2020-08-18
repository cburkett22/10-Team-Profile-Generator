const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super("Manager", name, id, email);
        this.office = office;
    }

    getOfficeNumber() {
        return this.office;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;