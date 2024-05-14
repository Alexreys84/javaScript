/**
 * Calcular Status do Aluno
 * @author Alex dos Reis
 */

// Função para calcular a média e status do aluno
function calcularStatus() {
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let nota3 = Number(document.getElementById('nota3').value)
    let nota4 = Number(document.getElementById('nota4').value)

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    let statusElement = document.getElementById('statusResultado')
    let imgElement = document.getElementById('imgStatus')

    if (media >= 7) {
        statusElement.textContent = 'APROVADO'
        imgElement.src = 'img/aprovado.png'
    } else if (media < 4) {
        statusElement.textContent = 'REPROVADO' 
        imgElement.src = 'img/reprovado.png'
    } else {
        statusElement.textContent = 'RECUPERAÇÃO'
        imgElement.src = 'img/recuperacao.png'
    }
}

// Adiciona o evento de clique para chamar a função calcularStatus
document.getElementById('btnCalcular').addEventListener('click', calcularStatus)
