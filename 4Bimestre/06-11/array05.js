// Crie uma função removeDuplicates(arr) que remova todos os elementos duplicados do array e retorne um novo array com apenas elementos únicos.

function removeDuplicates(arr) {
    let uniqueArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let isUnique = true;
     
      for (let j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
          isUnique = false;
          break;
        }
      }
      
      if (isUnique) {
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray;
  }
  

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]