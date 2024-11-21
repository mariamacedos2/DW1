//Crie um objeto chamado pessoa com as propriedades nome e idade. Adicione um método cumprimentar que exiba 
//uma mensagem no console com o nome da pessoa, como: "Olá, meu nome é [nome]".

const pessoa = {
    nome : "Maria",
    idade: 16,
    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
};

pessoa.cumprimentar()