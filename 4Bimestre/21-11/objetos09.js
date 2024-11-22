const estoque = [
    { id: 1, nome: "Caneta", quantidade: 10 },
    { id: 2, nome: "Caderno", quantidade: 15 },
    { id: 3, nome: "Borracha", quantidade: 5 }
];
  
function atualizarQuantidade(id, novaQuantidade) {
    const produto = estoque.find(item => item.id === id);
  
    if (produto) {
      produto.quantidade = novaQuantidade; 
      console.log("Produto atualizado:", produto);
    } else {
      console.log("Produto não encontrado!");
    }
}
  
console.log("Estoque antes:", estoque);
atualizarQuantidade(2, 30);
console.log("Estoque depois:", estoque);