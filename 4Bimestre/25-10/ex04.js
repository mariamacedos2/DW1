// 04-- Crie uma função countOccurrences(str, char) que receba uma string e um caractere,
// e conte quantas vezes esse caractere aparece na string.

function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

//i: É a variável que controla a posição atual no laço for. Ela começa em 0 e aumenta em 1 a cada iteração (isso é feito pelo i++).
//str.length: Representa o comprimento (número total de caracteres) da string str

console.log(countOccurrences("banana", "a")); // Deve exibir: 3
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3
console.log(countOccurrences("maria macedo", "m"));
