//- Usando o objeto `carro` criado no exercício anterior, exiba o valor da propriedade `marca` no console. 
//Em seguida, atualize o valor da propriedade `ano` para 2021 e exiba o objeto atualizado.

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

console.log(carro)
//aparece o modelo inicial do carro

console.log(carro.marca);
//aparece somente a marca

carro.ano = 2021
//atualiza o ano do carro

console.log(carro)
//aparece o modelo atualizado do carro