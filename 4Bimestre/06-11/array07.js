// Crie uma função mergeArrays(arr1, arr2) que receba dois arrays e retorne um novo array contendo todos os elementos de ambos os arrays.

function mergeArrays(arr1, arr2){
    const array = [];
    let i = 0; 
    let j = 0; 
      
        
    while (i < arr1.length) {
    array[array.length] = arr1[i];
      i++;
    }
      
    while (j < arr2.length) {
      array[array.length] = arr2[j];
        j++;
    }
    
    return array
}

console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]