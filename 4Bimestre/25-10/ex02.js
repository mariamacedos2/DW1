// 02-- Crie uma função countVowels(str) que conte o número
// de vogais (a, e, i, o, u) em uma string e retorne esse valor.

function countVowels(str){
    const vogais = 'AEIOUaeiou';
    let count = 0;

    for(let letra of str){
        if (vogais.includes(letra)) {
            count++;
        }
    }   

    return count;

}
//O método includes() verifica se char está presente na string vowels. 
//Se char for uma vogal, a condição será verdadeira.

console.log(countVowels("OpenAI")); // Deve exibir: 4
console.log(countVowels("JavaScript")); // Deve exibir: 3