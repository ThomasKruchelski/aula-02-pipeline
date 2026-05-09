const jurosCompostos, mostrarInvestimento = require('./calculos');

test('Juros de R$1000 em uma taxa de 10% em 2 anos deve resultar R$1210', () => {
    expect(jurosCompostos(1000,10,2)).toBe('1210');
})

test('Lucro de juros de R$1000 em uma taxa de 10% em 2 anos deve resultar R$210', () => {
    expect(mostrarInvestimento(1000,10,2)).toBe('210');
})