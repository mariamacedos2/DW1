//Escreva uma função getInitials(name) que receba o nome completo de uma pessoa 
//e retorne suas iniciais em maiúsculas.

function getInitials(name){
    
    return name.split(" ").map(word => word[0].toUpperCase()).join("");

}

//Usamos map para pegar a primeira letra de cada palavra com word[0] e, 
//em seguida, transformá-la em maiúscula com .toUpperCase().

// join junta elas em seguida

console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"