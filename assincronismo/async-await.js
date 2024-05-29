/**
 * Assincronismo
 * Promises
 * async-await
 * @author Alex Reis
 */
//importar biblioteca nativa (javascript) para trabalhar com manibulação de arquivos 
const fs = require('fs')

// função para criar um arquivo
async function criarArquivo() {
    let conteudo = "Alex dos Reis\nExemplo de uso dos Recursos async - await"
    await gravarArquivo('teste.txt', conteudo)
}
//Função para gravar um arquivo
async function gravarArquivo(local, conteudo) {
    try {
        await fs.promises.writeFile(local, conteudo)
        console.log("Arquivo criado com Sucesso")
    } catch (error) {
        console.log(error)
    }
}
criarArquivo()

