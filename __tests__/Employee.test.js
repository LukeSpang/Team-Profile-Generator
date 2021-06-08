const Employee = require('../lib/employee');

test('creates a random employee object', () =>{
    const employee = new Employee('Mike', 123, 'mike.smith@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', ()=>{
    const employee = new Employee('Mike', 123, 'mike.smith@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', ()=>{
    const employee = new Employee('Mike', 123, 'mike.smith@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee email', () =>{
    const employee = new Employee('Mike', 123, 'mike.smith@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee role', ()=>{
    const employee = new Employee('Mike', 123, 'mike.smith@email.com');

    expect(employee.getRole()).toEqual('Employee');
})