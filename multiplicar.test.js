const multiplicar = require('./multiplicar')
test ('Deve multiplicar dois numeros', () => {
    expect(multiplicar(2, 3)).toBe(6);
});

test ('Deve multiplicar dois numeros negativos', () => {
    expect(multiplicar(-5, -2)).toBe(10);
});


test ('Deve multiplicar dois numeros negativos e positivos', () => {
    expect(multiplicar(-4, 6)).toBe(-24);
});


test ('Deve multiplicar dois numeros e falhar', () => {
    expect(multiplicar(3, 2)).toBe(5);
});