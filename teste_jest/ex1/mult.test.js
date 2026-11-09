const multiplicar = require('./mult');


describe('mult.js', () => {
    test('O resultado da mulotiplicação de 3 * 4 é 12', () => {
        expect(multiplicar(3, 4)).toBe(12);
    });
    it('Deve retornar 0 na multiplicação com 0', () => {
        expect(multiplicar(7, 0)).toBe(0)
    });
})
