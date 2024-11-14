//07--Faça uma função para verificar se o uso de álcool compensa mais que o uso de gasolina. Se sim, deve-se retornar True, se não,
// deve-se retornar False. Sabe-se que álcool compensa se o valor do litro do álcool for abaixo de 70% do valor do litro da gasolina

function compensaUsoAlcool(valorAlcool, valorGasolina) {
    // Verifica se o valor do litro do álcool é menor que 70% do valor do litro da gasolina
    if (valorAlcool < 0.7 * valorGasolina) {
      return true;
    } else {
      return false;
    }
  }
  
  // Exemplo de uso:
  let valorAlcool = parseFloat(prompt("9"));
  let valorGasolina = parseFloat(prompt("8"));
  
  // Chama a função e exibe o resultado
  if (compensaUsoAlcool(valorAlcool, valorGasolina)) {
    console.log("O uso de álcool compensa mais.");
  } else {
    console.log("O uso de álcool não compensa mais.");
  }


  