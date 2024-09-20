document.addEventListener('DOMContentLoaded', (event) => {

    let inputTroco = document.getElementById("troco");
    let divSaida = document.getElementById("saida");
    let botaoCalcular = document.getElementById("calcular");

    botaoCalcular.onclick = calcularTroco;

    function calcularTroco() {
        let valorTroco = parseFloat(inputTroco.value);
        let qtd20 = Math.floor(valorTroco / 20);
        valorTroco = valorTroco % 20;
        let qtd10 = Math.floor(valorTroco / 10);
        valorTroco = valorTroco % 10;
        let qtd1 = valorTroco;

        divSaida.innerText = `Cédulas de 20: ${qtd20}\nCédulas de 10: ${qtd10}\nMoedas de 1: ${qtd1}`;
    }
});