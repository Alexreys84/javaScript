/**
 * Sorteio de uma carta 
 * Exemplo de uso do arry para simplificar o codigo
 * @author Alex Reis
 */

function sortearCarta() {
    //          [0] [1] [2] [3]
    let nipes = ["♦", "♥", "♠", "♣"]
    //          [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11][12]
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    //Sorteido do indice dos vetores
    let nipe = nipes[Math.floor(Math.random() * 4)] // (0 - 3)
    let face = faces[Math.floor(Math.random() * 13)] // (0 - 12)
    // console.log(`${face}${nipe}`)
    //Determinar a cor com base do naipe antes de sortear a carta
    if (nipe === "♥" || nipe === "♦") {
        cor = '#ff0000' /*vermelho*/
        }
             else {

                cor = '#000000' /*preto*/
            }
            // Renderizar (denhar exibir ,dar vida )
            document.getElementById("supEsq").innerHTML = `<div>${face}${nipe}</div>`
            document.getElementById("centro").innerHTML = `<div>${nipe}</div>`
            document.getElementById("infDir").innerHTML = `<div>${face}${nipe}</div>`
            //aplicar a cor
            document.getElementById('supEsq').style.color = cor /*Adicionar css*/
            document.getElementById('centro').style.color = cor /*Adicionar css*/
            document.getElementById('infDir').style.color = cor /*Adicionar css*/

        }