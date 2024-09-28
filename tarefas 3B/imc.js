let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("alutura")
let diviSaida = document.getElementById("Saida")

let botaoCalcular = document.getElementById("calcular")
botaoCalcular.onclick = calculaIMC

diviSaida.addEventListener("dbclick", mensagem):

function mensagem()(
    alert("duplo click")
)

function calculaIMC(){
    let peso = Number(inputPeso.value);
    let alutura = Number(inputAltura.value);

    let imc = peso/(alura * altura);

    let texto = 'Seu IMC é ${imc}'

    diviSaida.innerText = Texto;
}