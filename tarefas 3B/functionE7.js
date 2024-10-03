//07--Faça uma função para verificar se o uso de álcool compensa mais que o uso de gasolina. Se sim, deve-se retornar True, se não,
// deve-se retornar False. Sabe-se que álcool compensa se o valor do litro do álcool for abaixo de 70% do valor do litro da gasolina

function verificar(precoAlcool, precoGasolina) {
    if (precoAlcool < 0.7 * precoGasolina) {
        return true;
    } else {
        return false;
    }
}


let pAlcool = 4.00; 
let pGasolina = 6.00;

if (verificar(pAlcool, pGasolina)) {
    console.log("Compensa usar álcool.");
} else {
    console.log("Não compensa usar álcool.");
}