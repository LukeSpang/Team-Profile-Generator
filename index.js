const fs = require("fs");
const inquirer = require('inquirer');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require('./lib/html');
const Manager = require('./lib/mangaer');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const employees = [];

employeeType = () => {
    console.log("What is this employee's role?");
    return inquirer.prompt([
        {
            type: "list",
            message: "What is the employee's role",
            name: "role",
            choices: ["engineer", "intern"],
        },
])
    .then((choice) =>{
        if(choice.role === "engineer"){
            addEngineer();
        }else{
            addIntern();
        }
    });
};

addEngineer = () =>{
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the engineer's employee ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the engineer's email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the engineer's github user name??",
            name: "github",
        },
    ])
    .then((engineerResults) => {
        engineerResults.role = "engineer";
        const {name, id, email, github, role} = engineerResults;
        console.log(name, "howdy luke")
        const newEngineer = new Engineer(name, id, email, github, role);
        employees.push(newEngineer);
        addEmployee();
    });
};
