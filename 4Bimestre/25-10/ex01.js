// 01-- Crie uma função reverseString(str) que receba uma string como
// parâmetro e retorne a string invertida.

function reverseString(str) {
    let reversed = ""; // Inicializa uma string vazia para armazenar o resultado
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Adiciona os caracteres da string original de trás para frente
    }
    return reversed;
}


console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"
console.log(reverseString("Maria Macedo"));
