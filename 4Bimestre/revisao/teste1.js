//Crie uma função countVowels(str) que conte o número de vogais (a, e, i, o, u) em uma string e retorne esse valor.

function countVowels(str){
    let count = 0
    let vogais = "AEIOUaeiou"

    for(let i of str){
        if(i == vogais){
            count ++;
            break;
        }
    }
    return count
}

console.log(countVowels("MACEDO"))