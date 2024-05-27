
/**
 * Calcular Area do Retângulo
 * @author Alex dos Reis
 */
document.addEventListener("DOMContentLoaded", function() {
    let baseInput = document.getElementById("base")
    let alturaInput = document.getElementById("altura")
    let btnCalcular = document.getElementById("Calcular")
    let areaResultado = document.getElementById("Resultado")

    btnCalcular.addEventListener("click", function() {
        let base = Number(baseInput.value)
        let altura = Number(alturaInput.value)

        if (base && altura) {
            let area = base * altura;
            areaResultado.textContent = "Área do Retângulo: " + area;
        } else {
            areaResultado.textContent = "Por favor, insira valores válidos para base e altura.";
        }
    })
})

