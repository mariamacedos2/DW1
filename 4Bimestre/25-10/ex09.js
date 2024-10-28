// 09-- Escreva uma função replaceChar(str, oldChar, newChar) que substitua
// todas as ocorrências de um caractere específico em uma string por outro caractere.
function replaceChar(str, oldChar, newChar){
    return str.split(oldChar).join(newChar)
}

console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")); // Deve exibir: "bonono
console.log(replaceChar("Maria Eduarda","a", "o"));