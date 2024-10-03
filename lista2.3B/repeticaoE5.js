// 05-- Faça uma função para imprimir os N primeiros números primos, onde N é recebido por parâmetro pela função. 

function primos(N) {
    let count = 0;
    let numero = 2;
    
    while (count < N) {
        if (verificarPrimo(numero)) {
            console.log(numero);
            count++;
        }
        numero++;
    }
}

function verificarPrimo(N) {
    if (N < 2) return false;
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return false;
        }
    }
    return true;
}

primos(5);