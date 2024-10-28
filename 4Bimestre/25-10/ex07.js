// 07-- Desenvolva uma função capitalizeWords(str) que transforme a primeira
// letra de cada palavra em uma frase para maiúscula.

function capitalizeWords(str){
    const palavras = str.toLowerCase().split(" ");
    let frase = "";

    for (let i = 0; i < palavras.length; i++ ) {
        if (palavras[i]) {
            frase += palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1) + " ";
        }
    }
    return frase.trim(); 
}



console.log(capitalizeWords("maria eduarda"));
console.log(capitalizeWords("hello world")); // Deve exibir: "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // Deve exibir: "JavaScript Is Awesome"
