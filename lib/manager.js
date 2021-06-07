const Employee = require("./employee");

class Manager extends Employee{
    constructor (name, id, email, officeNumber, role){
        super(name, id, email);
        this.role = "Manager";
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getOffice(){
        return this.officeNumber;
    }
}

module.exports = Manager