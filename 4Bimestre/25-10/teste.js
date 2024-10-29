// 04-- Crie uma função countOccurrences(str, char) que receba uma string e um caractere,
// e conte quantas vezes esse caractere aparece na string.

function countOccurrences(str, char){
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            count++;
        }
    }

    return count
}

console.log(countOccurrences("banana", "a"));