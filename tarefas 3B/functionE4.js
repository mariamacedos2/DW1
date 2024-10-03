// 04 -- Faça uma função que a partir da idade e peso do paciente calcule a dosagem de um medicamento 
//e retorne quantas gotas do medicamento o paciente deve tomar por dose.

function medicamento(idade, peso) {
    let dose = 0;

    if (idade >= 12) { 
        if (peso >= 60) {
            dose = 1000;
        } else {
            dose = 875;
        }
    } else { 
        if (peso >= 5 && peso <= 9) {
            dose = 125;
        } else if (peso > 9 && peso <= 16) {
            dose = 250;
        } else if (peso > 16 && peso <= 24) {
            dose = 500; 
        } else if (peso > 24) {
            dose = 750;
        }
    }

    const doseMl = dose / 500; 
    const gotas = doseMl * 20;

    return gotas;
}

const idade = 10; 
const peso = 20; 

const gotaspdose = medicamentoe(idade, peso);
console.log(`O paciente deve tomar ${gotaspdose} gotas por dose.`);