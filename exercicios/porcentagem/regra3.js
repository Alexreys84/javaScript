/**
 * regra de 3
 */
const read = require('readline-sync')

let  x, y, valor

console.clear()
console.log("regra de 3")
console.log("x% de y = valor")
//entrada de dados 
x = read.question("digite o valor de x")
y = read.question("digite o valor de y")
// processamento 
valor = (x * y) / 100
// saida 
console.log('${x}% de ${y} = ${valor.toFixed(2)}')


