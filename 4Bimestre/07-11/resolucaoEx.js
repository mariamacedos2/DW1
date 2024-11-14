function sumArray(){
    let soma = 0

    for(let i=0; i<v1.length; i++){
        soma = soma +v1[i]
    }
}

let v1 = [1, 2, 3, 4]
let v2 = [10, -10, 10]
console.log(sumArray(v1)); // Deve exibir: 10
console.log(sumArray(v2)); //