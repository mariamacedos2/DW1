//Crie um objeto chamado produto com as propriedades nome, preco e categoria.
// Use um loop for...in para exibir todas as propriedades e seus valores no console.

const produto ={
    nome: "Camisa",
    preco: 49.99,
    categoria: "Adulto"
}

for(let i in produto){
    console.log(`${i}: ${produto[i]}`)
}