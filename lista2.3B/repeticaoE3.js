//03--Faça uma função que dado um número N, imprime na tela todos os valores pares entre N e 1

function pares(N){
    for(let i = 1; i <= N; N--){
        if(N % 2 === 0){
            console.log(N)
        }
    }
}

pares(8)
// % retorna o resto da divisao de N por 2

//== (igualdade solta): Compara apenas os valores e tenta converter os tipos automaticamente para ver se eles são equivalentes. -
//Por exemplo, 2 == "2" é true, pois o JavaScript converte a string "2" em número 2 para fazer a comparação.

//=== (igualdade estrita): Compara os valores e os tipos. Portanto, 2 === "2" é false, 
//pois 2 é um número e "2" é uma string, então não são exatamente iguais.