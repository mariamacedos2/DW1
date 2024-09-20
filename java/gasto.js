let inputPrecoAlcool = document.getElementById("precoalcool")
let divResultado = document.getElementById("saida");
let botaoCalcular = document.getElementById("calcular");
let inputDistancia = document.getElementById("distancia");
let inputAutonomia = document.getElementById("autonomia");
let inputPedagio = document.getElementById("pedagio");

botaoCalcular.onclick = calcularCusto;

function calcularCusto() {
    let distancia = Number(inputDistancia.value);
    let autonomia = Number(inputAutonomia.value);
    let pedagio = Number(inputPedagio.value);
    let precoAlcool = Number(inputPrecoAlcool.value);

    let custoCombustivel = (distancia / autonomia) * precoAlcool;
    let custoTotal = custoCombustivel + pedagio;

    divResultado.innerText = 'O custo total da viagem é R$ ' + custoTotal.toFixed(2);
}