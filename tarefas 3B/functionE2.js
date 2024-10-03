// 02-- Faça uma função que verifique se três medidas podem constituir um triângulo.
// A função deve devolver true se as medidas formam um triângulo e false caso contrário.

function triangulo(lado1, lado2, lado3){
    if(
         (lado1 + lado2 > lado3 && Math.abs(lado1 - lado2) < lado3) &&
         (lado1 + lado3 > lado2 && Math.abs(lado1 - lado3) < lado2) &&
         (lado2 + lado3 > lado1 && Math.abs(lado2 - lado3) < lado1)
     ) 
     {return true 
 
     }else { return false}
 }
 
 let l1 = 10
 let l2 = 20
 let l3 = 15
 
 if (triangulo(l1,l2,l3)){
     console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo`)
 }else {
     console.log(`Os lados ${l1}, ${l2} e ${l3} NÃO formam um triângulo`)
 }