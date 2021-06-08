const Engineer = require('../lib/engineer');

test('creates the engineer object', ()=>{
    const engineer = new Engineer('Sam', 111, 'sam.stone@email.com', 'samtheman');

    expect(engineer.github).toEqual(expect.any(String));

});

test('gets engineer github value', () =>{
    const engineer = new Engineer('Sam', 111, 'sam.stone@email.com', 'samtheman');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});