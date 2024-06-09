const holaMundo = require('./index');

test('retorna \"Hola Mundo\"', () => {
    expect(holaMundo()).toBe('Hola Mundo');
});