//Crie uma função toSnakeCase(str) que receba uma string em 
//formato de frase e converta para o formato "snake_case".

function toSnakeCase(str){
    return str.trim().toLowerCase().replace(/\s+/g, "_");

}

//trim() : remove os espaços
//toLowerCase(): deixa minusculo

//replace(/\s+g, "_") :Usa uma expressão regular (\s+) para encontrar todos os espaços na string
// (onde \s corresponde a um espaço e + indica um ou mais espaços consecutivos).
//Substitui cada conjunto de espaços por um underscore (_), criando o formato snake_case.

console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"
console.log(toSnakeCase("Maria Macedo"));
