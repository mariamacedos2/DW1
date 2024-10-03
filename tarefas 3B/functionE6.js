// 06-- Faça uma função que receba um valor numérico representando um ano (por exemplo, 1890) e verifique se o ano é ou não bissexto.
// Um ano é bissexto se ele for divisível por 400 ou se ele for divisível por 4 e não por 100.

function bissexto(ano) {
    if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)) {
        return true; 
    } else {
        return false; 
    }
}

let ano = 2007;
if (bissexto(ano)) {
    console.log(ano + " é bissexto.");
} else {
    console.log(ano + " não é bissexto.");
}