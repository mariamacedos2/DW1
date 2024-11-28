//Crie uma função countOccurrences(arr, element) que receba um array e um elemento, e retorne o número de vezes que o elemento aparece no array.

function countOccurrences(arr, element){
    let count = 0
    for(i of arr){
        if(i == element){
            count += 1
        }
    }
    return count
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2
console.log(countOccurrences(["maria", "macedo", "macedo","macedo"], "macedo"));