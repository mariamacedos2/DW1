// 06-- Crie uma função que calcule e devolva o fatorial de um determinado número

function fatorial(N){
    let count = 1
    for(let i = 1; i <= N; i++){
        count *= i
    }
    console.log(count)
}

fatorial(5)