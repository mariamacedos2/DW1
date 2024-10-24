function somaSerie(cont){
    let cont = 3

    let soma = 0
    let y = 1
    for(let x=1, y = 1; x<=cont; x++, y +=2){
        soma =  soma + (x * y)
        y += 2
    }

    console.log(soma)

    return soma
}


//function somaSerie(cont){
//    let soma = 0

    

//    return soma
//}

//console.log(somaSerie(3))
//console.log(somaSerie(4))




//cont = 4
//               x   y
//soma =  soma + (1 * 1)
//soma =  soma + (2 * 3)
//soma =  soma + (3 * 5)
//soma =  soma + (4 * 7)



//exemplo 2
//                x   x+1
//soma =  soma + (1 * 1)
//soma =  soma + (2 * 3)
//soma =  soma + (3 * 5)
//soma =  soma + (4 * 7)