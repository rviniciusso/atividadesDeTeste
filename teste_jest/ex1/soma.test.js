const soma = require('./soma');


test('O resultado da soma de 1 + 2 é 3', () => {
    expect(soma(1, 2)).toBe(3);
});