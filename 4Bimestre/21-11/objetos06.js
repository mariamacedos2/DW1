//Crie um array chamado biblioteca que contenha três objetos, 
//cada um representando um livro. Cada livro deve ter as propriedades titulo, autor e anoPublicacao. Exiba todos os títulos no console.

const biblioteca = [
    {titulo : "9 de Novembro", autor : "Colleen hoover", anoPublicacao : 2015},
    {titulo : "É assim que acaba", autor : "Colleen hoover", anoPublicacao : 2016},
    {titulo : "É assim que começa", autor : "Colleen hoover", anoPublicacao : 2019}

];

for(let livro of biblioteca){
    console.log(livro.titulo)
}