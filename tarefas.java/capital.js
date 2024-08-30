let inputCapital = document.getElementById("capital")
let inputJuro = document.getElementById("juro")
let inputPeriodo= document.getElementById("periodo")
let botaoCalcular = document.getElementById("calcular")

botaoCalcular.onclick = CalcularImc

function CalcularImc(){
    
    let capital = Number(inputCapital.value)
    let juro = Number(inputJuro.value)
    let periodo = Number(inputPeriodo.value)

    let i = juro / 100

    divSaida.innerText = imc
}