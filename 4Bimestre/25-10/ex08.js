// 08-- Crie uma função trimSpaces(str) que remova todos os espaços extras no início e 
//no final da string e deixe apenas um espaço entre as palavras.

 function trimSpaces(str){
    return str.trim().replace(/\s+/g, " ")
 }

console.log(trimSpaces("   JavaScript    é     divertido    ")); // Deve exibir: "JavaScript é divertido"
console.log(trimSpaces("   Programação     é   interessante  ")); // Deve exibir: "Programação é interessante"
