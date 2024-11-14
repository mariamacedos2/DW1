function getEvenNumbers(vetor){
    let novo = []

    for (let elemento of vetor){
        if(elemento % 2 == 0){
            novo.push(elemento)
        }
    }
    return novo
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]