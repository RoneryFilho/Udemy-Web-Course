//calcula o aumento baseado no caso (A = 10%, B = 15% e C = 20%)

function salario(caso){

    switch(caso){
        case 'A':
            return '10%';
        case 'B':
            return '15%';
        case 'C':
            return '20%';
        default:
            return 'PLANO INVÁLIDO';
    }

}

console.log(salario('A'));
console.log(salario('B'));
console.log(salario('C'));
console.log(salario('D'));
console.log(salario('Jorge'));
console.log(salario(15));