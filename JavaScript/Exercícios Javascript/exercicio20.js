//retorna o menor numero do aray

function menorNumero(array){
    let menor = array[0];

    array.forEach(e => {
        if(e < menor){
            menor = e;
        }
    });
    return menor;
}

let teste1 = [10, 5, 35, 65];
let teste2 = [5, -15, 50, 3];

console.log(menorNumero(teste1));
console.log(menorNumero(teste2));