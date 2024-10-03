// 05 -- Faça uma função que aceite como entrada uma medida em centímetros e uma string: “m” (metros), “mm” (milímetros)
//ou “km” (quilômetros). 

function conversor(centimetros, unidade) {
    let resultado = 0;

    switch (unidade) {
        case 'm':
            resultado = centimetros / 100; 
            break;
        case 'mm': 
            resultado = centimetros * 10;
            break;
        case 'km':
            resultado = centimetros / 100000;
            break;
        default:
            return "Unidade inválida! Use 'm', 'mm' ou 'km'.";
    }

    return resultado;
}

let cm = 1500;
let uniconver = 'm';

let resultadoConversao = conversor(cm, uniconver);
console.log(`A medida convertida é: ${cm} ${uniconver}`);