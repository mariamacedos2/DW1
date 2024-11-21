function elevado(a, b){
    for(let i = 1; i <= b; i++){
        a *= i
    }
    return a
}

console.log(elevado(2, 3))