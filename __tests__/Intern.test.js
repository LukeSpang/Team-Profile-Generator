const Intern = require('../lib/intern');

test('creates the intern object', () =>{
    const intern = new Intern('Terry', 222, 'terry.stewart@email.com', 'UNC');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', ()=>{
    const intern = new Intern('Terry', 222, 'terry.stewart@email.com', 'UNC');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

