// 03-- Escreva uma função isPalindrome(str) que verifique se uma string 
//é um palíndromo (ou seja, se ela é a mesma quando lida de trás para frente).

function isPalindrome(str){
    let palavra = str.split('').reverse().join('');

    if(palavra == str){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("maram"));
console.log(isPalindrome("hello")); // Deve exibir: false