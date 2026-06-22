const carro = {
    marca: "gol 200cv Superfast",
    motor: "V8",
    potencia: "300cv",
}
for (let chave in carro){
console.log(`${chave}: ${carro[chave]}`)
}
console.log(Object.values(carro));
console.log(Object.keys(carro));