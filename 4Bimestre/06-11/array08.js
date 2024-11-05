//Escreva uma função getEvenNumbers(arr) que receba um array de números e retorne um novo array contendo apenas os números pares.

function getEvenNumbers(arr){
    const r = []

    for(let i = 0; i < arr.length; i++){
        if (arr[i]% 2 === 0){
            r[r.length] = arr[i]
        }
    }
    return r
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]