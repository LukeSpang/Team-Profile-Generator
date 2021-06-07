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
        engineerResults.role = "Engineer";
        const {name, id, email, github, role} = engineerResults;
        console.log(name, "howdy luke")
        const newEngineer = new Engineer(name, id, email, github, role);
        employees.push(newEngineer);
        addEmployee();
    });
};

addIntern = () =>{
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the intern's employee ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What school does this intern attend?",
            name: "school",
        },
    ])
    .then((internResults)=>{
        internResults.role = "Intern";
        const {name, id, email, school} = internResults;
        const newIntern = new Intern(name, id, email, school, role);
        employees.push(newIntern);
        addEmployee();
    });
};

addEmployee = () =>{
    return inquirer.prompt([
        {
            type: "list",
            message: "Do you wish to add another team member?",
            choices: ["Yes", "No"],
            name: "another"
        },
    ])
    .then((choice)=>{
        if(choice.add === "Yes"){
            employeeType();
        }else{
            renderHtml();
        }
    });
};

init = () =>{
    return inquirer.prompt([
        {
            type: "input",
            message: "Who is the team's Manager?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the managers employee ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the managers email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the managers office number?",
            name: "officeNumber",
        },
    ])
    .then((managerResults)=>{
        managerResults.role = "Manager";
        const {name, id, email, officeNumber} = managerResults;
        const newManager = new Manager(name, id, email, officeNumber, role);
        employees.push(newManager);
        employeeType();
    });
};

renderHtml = () =>{
    const buildHTML = render(employees);
    fs.writeFile(outputPath, buildHTML, (err)=>{
        if(err){
            return console.log(err);
        }else{
            return console.log("HTML file created!");
        }
    });
};
init();