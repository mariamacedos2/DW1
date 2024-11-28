// Crie uma função sumArray(arr) que receba um array de números e retorne a soma de todos os elementos.

function sumArray(arr){
    let soma = 0
    for(i of arr){
        soma += i
    }
    return soma
}

console.log(sumArray([2, 3, 3, 4, 7]));
console.log(sumArray([1, 2, 3, 4])); // Deve exibir: 10
console.log(sumArray([10, -10, 10])); // Deve exibir: 10

//for(i of arr) – Esse laço for...of percorre cada elemento i dentro do array arr. Ele vai iterar uma vez para cada elemento.