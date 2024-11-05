// Desenvolva uma função average(arr) que receba um array de números e retorne a média dos elementos.

function average(arr){
    let quantidade = 0
    let soma = 0
    for(i of arr){
        quantidade += 1;
        soma += i;
    }
    media = soma/quantidade
    return media

}

console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
console.log(average([10, 20, 30])); // Deve exibir: 20
console.log(average([500, 300, 100, 100])) //