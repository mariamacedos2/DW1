// 01-- Crie uma função reverseString(str) que receba uma string como
// parâmetro e retorne a string invertida.

function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"
console.log(reverseString("Maria Macedo"));

//scr.split('') Divide as strings em um array de caracteres
//Por exemplo, para a string "Hello", split('') resulta em ['H', 'e', 'l', 'l', 'o'].

//.reverse() inverte a ordem dos elementos do array
//Continuando com o exemplo anterior, ['H', 'e', 'l', 'l', 'o'].reverse() resulta em ['o', 'l', 'l', 'e', 'H'].

//.join('') junta os elementos do array de volta em uma strinh
// Assim, ['o', 'l', 'l', 'e', 'H'].join('') resulta na string "olleH".