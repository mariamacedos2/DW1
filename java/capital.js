document.addEventListener('DOMContentLoaded', (event) => {

    let inputCapital = document.getElementById("capital")
    let inputJuro = document.getElementById("juro")
    let inputPeriodo = document.getElementById("periodo")
    let divSaida = document.getElementById("saida")
    let botaoCalcular = document.getElementById("calcular")

    botaoCalcular.onclick = CalcularMont

    function CalcularMont(){
        

        let capital = parseFloat(inputCapital.value)
        let juro = parseFloat(inputJuro.value)
        let periodo = parseFloat(inputPeriodo.value)

        let i = juro / 100

        let montante = capital * Math.pow((1 + i), periodo)

        divSaida.innerText = montante;
    }

})