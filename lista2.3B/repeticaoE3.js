//03--Faça uma função que dado um número N, imprime na tela todos os valores pares entre N e 1

function pares(N) {
    for (let i = N; i >= 1; i--) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

pares(10);