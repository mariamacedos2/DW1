function primos(N){
    let count = 0
    let num = 2

    while(count < N){
        if(verifica(num)){
            console.log(num);
            count++
        }
        num++
    }
}

function verifica(nume){
    if(nume < 2){
        return false
    }
    for(let i = 2; i < nume; i++){
        if(nume % i === 0){
            return false
        }
    }
    return true
}

console.log(primos(10))