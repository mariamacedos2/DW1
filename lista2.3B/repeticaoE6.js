// 06-- Crie uma função que calcule e devolva o fatorial de um determinado número

function fatorial(N){
    let count = 1
    for(let i = N; i > 1; i--){
       count = count * i
    }
    return count
}

console.log(fatorial(5))