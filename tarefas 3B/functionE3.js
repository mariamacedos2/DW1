// 03 - Faça uma função que analise os lados de qualquer triângulo e retorne sua classificação 
//ou se as medidas não formam um triângulo.

function triangulo(l1, l2, l3){
    if(l1 == l2 && l2 == l3){
        return "triangulo equilatero"
    } else if((l1 == l2 && l3 != l2) || (l1 == l3 && l2 != l2) || (l3 == l2 && l3 != l1)){
        return "triangulo isoceles"
    }else{
        return "triangulo escaleno"
    }
}

let l1 = 12
let l2 = 23
let l3 = 20

console.log(triangulo(l1, l2, l3));