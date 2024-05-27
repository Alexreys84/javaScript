/**
 * JS - PDV
 * @author Alex Reis
 */

function calcular() {
    let total = frmPVD.txtTotal.value
    let porcentagem = frmPVD.txtPorcentagem.value
    let desconto = total * (porcentagem / 100)
    let totalComDesconto = total - desconto
    frmPVD.txtDesconto.value = desconto
    frmPVD.txtTotalComDesconto.value = totalComDesconto
    
}

function calcularTroco() {
    //entrada
    let valorPago = frmPVD.txtValorPago.value
    //Processamento
    let totalComDesconto = frmPVD.txtTotalComDesconto.value
    //saida
    let troco = valorPago - totalComDesconto
    frmPVD.txtTroco.value = troco
   
}

function limpar() {
    frmPVD.reset()

}