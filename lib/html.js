const path = require("path");
const fs = require("fs");
const templatesDir = path.resolve(__dirname, "../templates");

const render = (employees) => {
    const html = [];

    html.push(
        ...employees
        .filter((employee)=> employee.getRole()==="Manager")
        .map((manager) => renderManager(manager))
    );
    html.push(
        ...employees
        .filter((employee)=> employee.getRole()==="Engineer")
        .map((engineer) => renderEngineer(engineer))
    );
    html.push(
        ...employees
        .filter((employee)=> employee.getRole()==="Intern")
        .map((intern) => renderIntern(intern))
    );

    return renderMain(html.join(""));
};


const renderManager = (manager) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "manager.html"),
        "utf-8"
    );
    template = replacePlacehodlers(template, "name", manager.getName());
    template = replacePlacehodlers(template, "role", manager.getRole());
    template = replacePlacehodlers(template, "email", manager.getEmail());
    template = replacePlacehodlers(template, "id", manager.getId());
    template = replacePlacehodlers(template, "officeNumber", manager.getOffice());
    return template;
};


const renderEngineer = (engineer) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "engineer.html"),
        "utf-8"
    );
    template = replacePlacehodlers(template, "name", engineer.getName());
    template = replacePlacehodlers(template, "role", engineer.getRole());
    template = replacePlacehodlers(template, "email", engineer.getEmail());
    template = replacePlacehodlers(template, "id", engineer.getId());
    template = replacePlacehodlers(template, "officeNumber", engineer.getOffice());
    return template;
};


const renderIntern = (intern) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "manager.html"),
        "utf-8"
    );
    template = replacePlacehodlers(template, "name", intern.getName());
    template = replacePlacehodlers(template, "role", intern.getRole());
    template = replacePlacehodlers(template, "email", intern.getEmail());
    template = replacePlacehodlers(template, "id", intern.getId());
    template = replacePlacehodlers(template, "school", intern.getSchool());
   
    return template;
};


const renderMAIN = (html) =>{
    const template = fs.readFileSync(
        path.resolve(templatesDir, "index.html"),
        "utf-8"
    );
    return replacePlacehodlers(template, "team", html);
};


const replacePlacehodlers = (template, placeholder, value) => {
    const pattern = new RegExp("{{" + placeholder + "}}", "gm");
    return template.replace(pattern, value);

};

module.exports = render; 