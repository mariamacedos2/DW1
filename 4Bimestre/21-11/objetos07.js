//Crie um objeto chamado carrinho que possui uma propriedade itens, que é um array de objetos.Cada item
//deve ter as propriedades nome e preco. Adicione um método dentro do objeto chamado calcularTotal que retorne a soma dos preços dos itens.

const carrinho ={
    itens :[
        {nome: "camisa", preco:50},
        {nome: "calca", preco: 30},
        {nome: "saia", preco: 20}
    ],
    calcularTotal: function() {
        let total = 0;
        for (let item of this.itens) {
          total += itens.preco;
        }
        return total;
      }
};

console.log(carrinho)
console.log(carrinho.calcularTotal)