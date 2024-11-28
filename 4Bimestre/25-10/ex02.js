// 02-- Crie uma função countVowels(str) que conte o número
// de vogais (a, e, i, o, u) em uma string e retorne esse valor.

function countVowels(str) {
    let vogais = "aeiouAEIOU"; 
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vogais.length; j++) {
            if (str[i] === vogais[j]) {
                count++;
                break; // Para evitar contagens repetidas para o mesmo caractere
            }
        }
    }
    return count;
}
 
console.log(countVowels("OpenAI")); // Deve exibir: 4
console.log(countVowels("JavaScript")); // Deve exibir: 3