//Crie uma função findIndex(arr, element) que receba um array e um elemento, e retorne o índice da primeira ocorrência 
//desse elemento no array. Se o elemento não estiver no array, retorne -1

function findIndex(arr, element) {
    let i = 0;
  
    while (i < arr.length) {
      if (arr[i] === element) {
        return i; 
      }
      i++;
    }
  
    return -1; 
  }

console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1