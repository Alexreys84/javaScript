/**
 * Assincronismo
 * Promises
 * fetch (Promise simplificada)
 * @author Alex Reis
 */
const read = require('readline-sync')
console.clear()
console.log("VIA CEP")
let cep = read.question("Digitar o CEP: ")
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
// apoio ao entendimento da logica
//console.log(urlAPI)
// uso de promise para recuperar os dados do web service (api)
fetch(urlAPI)
    .then((response) => { // para obter os dados 
        return response.json()
    })
    .then((dados) => {// manipular os dados obtidos
        console.log(dados.logradouro)
        console.log(dados.bairro)
        console.log(dados.localidade)
        console.log(dados.uf)

    })
    .catch((error) => {
        console.log(`Erro ao obter o enderço: ${error}`)

    })