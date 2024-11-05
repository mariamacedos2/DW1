// Escreva uma função allEquals(arr) que verifique se todos os elementos de um array são iguais. 
//Retorne true se forem e false caso contrário.

function allEquals(arr){
    for(i of arr){
        if(arr[0] != i){
            return false
        }
    }
    return true
}

console.log(allEquals([1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false

