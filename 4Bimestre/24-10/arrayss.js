function inserir(vet, pos, valor){
    if  (pos < 0) return false
    if (pos > vet.length) return false

    for(let i =  vetor.length; i > pos; i--){
        vetor[i] = vet[i-1]
    }
    vet[pos] = valor
    return true
}

function teste1(){
    inserir(vetor, 0, 40)
    inserir(vetor, vetor.length, 80)
    inserir(vetor, 1, 45)
    inserir(vetor, vetor.length-1, 75)
}

let vetor = [10,20,30]
console.log(vetor)


console.log(vetor)  