/**
 * Fundamentos
 * Sintaxe Básica da Linguagem JavaScript
 * @author Alex dos Reis 
 */
// importação de pacotes
const colors = require('colors')

// sentenças
console.log("Hello, World!\n".green)

// Blocos
{
    console.log("Hello, JavaScript!\n")
}

// omissão de chaves em estruturas de controle
let media = 7
if (media >= 5) 
    console.log("Aprovado!\n")
    
 else 
    console.log("Reprovado!\n")

for (let x = 1; x <= 10; x++)
    console.log(x)