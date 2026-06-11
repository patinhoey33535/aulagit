const {
    soma,
    multiplicar,
    subtrair,
    dividir
} = require("./calculadora");

// Soma
test("soma 2 + 3 = 5", () => {
    expect(soma(2, 3)).toBe(5);
});

// Multiplicação
test("multiplica 4 * 5 = 20", () => {
    expect(multiplicar(4, 5)).toBe(20);
});

// Subtração
test("subtrai 10 - 4 = 6", () => {
    expect(subtrair(10, 4)).toBe(6);
});

// Divisão
test("divide 20 / 4 = 5", () => {
    expect(dividir(20, 4)).toBe(5);
});

// Teste que falha
test("teste que falha", () => {
    expect(soma(2, 2)).toBe(5);
});