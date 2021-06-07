const path = require("path");
const fs = require("fs");
const templatesDir = path.resolve(__dirname, "../templates");

const render = (employees) => {
    const html = [];

    html.push(
        ...employees
        .filter(employee=> employee.getRole()==="Manager")
        .map(Manager => renderManager(Manager))
    );
    html.push(
        ...employees
        .filter(employee=> employee.getRole()==="Engineer")
        .map(Engineer => renderEngineer(Engineer))
    );
    html.push(
        ...employees
        .filter(employee=> employee.getRole()==="Intern")
        .map(Intern => renderIntern(Intern))
    );

    return renderMain(html.join(""));
};


const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"),"utf8");
    template = replacePlacehodlers(template, "name", manager.getName());
    template = replacePlacehodlers(template, "role", manager.getRole());
    template = replacePlacehodlers(template, "email", manager.getEmail());
    template = replacePlacehodlers(template, "id", manager.getId());
    template = replacePlacehodlers(template, "officeNumber", manager.getOffice());
    return template;
};


const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"),"utf8");
    template = replacePlacehodlers(template, "name", engineer.getName());
    template = replacePlacehodlers(template, "role", engineer.getRole());
    template = replacePlacehodlers(template, "email", engineer.getEmail());
    template = replacePlacehodlers(template, "id", engineer.getId());
    return template;
};


const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"),"utf8");
    template = replacePlacehodlers(template, "name", intern.getName());
    template = replacePlacehodlers(template, "role", intern.getRole());
    template = replacePlacehodlers(template, "email", intern.getEmail());
    template = replacePlacehodlers(template, "id", intern.getId());
    template = replacePlacehodlers(template, "school", intern.getSchool());
   
    return template;
};


const renderMain = html =>{
    const template = fs.readFileSync(path.resolve(templatesDir, "index.html"),"utf8");
    return replacePlacehodlers(template, "team", html);
};


const replacePlacehodlers = (template, placeholder, value) => {
    const pattern = new RegExp("{{" + placeholder + "}}", "gm");
    return template.replace(pattern, value);

};

module.exports = render; 