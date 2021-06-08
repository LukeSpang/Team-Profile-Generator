const Manager = require('../lib/manager');

test('creates the manager object', () =>{
    const manager = new Manager('James', 90, 'james.dean@email.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});
