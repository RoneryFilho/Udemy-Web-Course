//pega um array de numeros e um numero de digitos, e retorna apenas os valores do array que tiverem x digitos

function digitosIguais(array, dig){
    let digitos = [];
    
    array.forEach(e => {
        if(e.toString().length == dig){  //se o numero tem o comprimento(quantidade de digitos) iguais a quantidade de digitos informada, ele é colocado no array dos digitos
            digitos.push(e);
        }
    });

    return digitos;
}

console.log(digitosIguais([35, 5, 658, 24, 10],2));
console.log(digitosIguais([5, 9, 1, 125, 11], 1));