const usuarios = [
    { nome: "Alice", idade: 25, email: "alice@exemplo.com" },
    { nome: "Bruno", idade: 30, email: "bruno@exemplo.com" },
    { nome: "Carla", idade: 22, email: "carla@exemplo.com" }
];

const nomesEmails = usuarios.map(usuario => ({
    nome: usuario.nome,
    email: usuario.email
}));
  
console.log(nomesEmails);