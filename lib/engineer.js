const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github, role){
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;