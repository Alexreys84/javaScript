import { funcionario5 } from "../poo/login"

/**
 * estrutura de dados 
 * objetos
 * @author Alex Reis
 */
const funcionario1 ={}
console.log(typeof funcionario1)
//adcionar dados a estrutura (CRUD  create)
funcionario1.nome = "Alex"
funcionario1.cargo = "CEO"
funcionario1.email = "alex1234@terra.com"
funcionario1.salario = "R$15.000,00"
funcionario1.insta = "@alex123"
// lista os dados da estrutura(CRUD read)
console.log(funcionario1)
console.log(funcionario1.cargo) 
//Modificar os dados da estrutura(CRUD Update)
funcionario1.nome = "Alex Reis"
console.log(funcionario1)
//Excluir dados da estrutura (CRUD delete)
delete funcionario1.insta
console.log(funcionario1)
const funcionario2 ={
    nome: "jhon",
    cargo: "faxineiro",
    email:"jhon@uol.com",
    salario: "R$500.000,00"
}
console.log(funcionario2)

const endereco1 = {
    logradouro: "Av 12345",
    cidade: "São Paulo",
    estado: " SP "
}
console.log(endereco1)

const funcionario3 ={
    nome: "peter pam",
    cargo: "duende",
    email:"peter@sininho.com",
    salario: "R$000.000,00"
}
console.log(funcionario3)

const funcionario4 ={
    nome: "sininho",
    cargo: "ladra ",
    email:"sinhinho@sininho.com",
    salario: "R$1000.000,00",
    ...endereco1 // spread operator (união de duas estrutura)
}
console.log(funcionario4)

console.log(funcionario5)
console.log(funcionario5.armadura.versao)
funcionario5.suitup() // executar a função interna da estrututa






