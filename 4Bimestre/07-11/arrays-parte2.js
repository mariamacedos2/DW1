function samara(elemento){
    return elemento * 2
}

function marjory(elemento){
    return elemento/2
}

function bruno(elemento){
    return elemento - 1
}

function map(vetor, funcao){
    let novoVetor = []
    for(elemento of vetor){
        novoVetor.push(funcao(elemento))
    }
    return novoVetor
}

//function map_dobra(vetor){
//    let novoVetor = []
//  for(elemento of vetor){
//       novoVetor.push(elemento*2)
//    }
//    return novoVetor
//}

//function map_divide(vetor){
//    let novoVetor = []
//    for(elemento of vetor){
//        novoVetor.push(elemento/2)
//    }
//   return novoVetor
//}

//function map_menosUm(vetor){
//    let novoVetor = []
//    for(elemento of vetor){
//        novoVetor.push(elemento-1)
//    }
//    return novoVetor
//}

let vetor = [10,20,30]
let v1 = map(vetor, samara)
let v2 = map(vetor, marjory)
let v3 = map(vetor, bruno)

let v4 =  vetor.map(samara)
let v5 =  vetor.map(marjory)
let v6 =  vetor.map(bruno)

console.log(vetor)
console.log(v1)
console.log(v2)
console.log(v3)
console.log(v4)
console.log(v5)
console.log(v6)


