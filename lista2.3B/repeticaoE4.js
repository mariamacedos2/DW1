// 04-- Um número primo é um número positivo maior que 1 com apenas dois divisores: 1 e o próprio número.
//Faça uma função para determinar se um número é primo ou não. A função deve devolver true ou false

function primo(N) {
    if (N < 2) return false;
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primo(7)); 