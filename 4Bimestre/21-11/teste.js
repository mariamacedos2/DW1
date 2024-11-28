const estudantes = [
  { nome: "Alice", nota: 9 },
  { nome: "Bruno", nota: 7 },
  { nome: "Carlos", nota: 8 }
];

// Usando map para transformar cada objeto em uma string
const nomes = estudantes.map(estudantes => estudantes.nome);
console.log(nomes);