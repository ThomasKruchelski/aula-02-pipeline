const jurosCompostos = require('./calculos');

// test('deve somar 2 + 3', () => {
//     expect(soma(2,3)).toBe(5);
// })

test('Juros de R$1000 em uma taxa de 10% em 2 anos deve resultar R$1210', () => {
    expect(jurosCompostos(1000,10,2)).toBe('1210');
})