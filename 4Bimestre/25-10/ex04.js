//Crie uma função countOccurrences(str, char) que receba uma string e um caractere,
// e conte quantas vezes esse caractere aparece na string.

function countOccurrences(str, char){
    let count = 0 

    for (let c of str){
        if(c === char){
            count++;
        } 
        return count
    }
}

 1
console.log(countOccurrences("banana", "a")); // Deve exibir: 3
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3
