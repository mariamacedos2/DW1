// 06-- Crie uma função que calcule e devolva o fatorial de um determinado número

function fatorial(N) {
    let fatorial = 1;
    for (let i = N; i > 0; i--) {
        fatorial *= i;
    }
    return fatorial;
}

console.log(fatorial(5));