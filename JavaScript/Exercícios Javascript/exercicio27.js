//retorna o segundo maior numero de um array

function segundoMaior(array){
    let maior = array[0];
    let segMaior = 0;

    array.forEach(e => {
        if(e > maior){
            segMaior = maior;
            maior = e;
        }else if(e > segMaior && e !== maior){
            segMaior = e;
        }
        
    });

    return segMaior;
}

let teste1 = [ 1, 3 ,12 , 9, 5, 4, 19];
console.log(segundoMaior(teste1));

let teste2 = [8, 4, 5, 6];
console.log(segundoMaior(teste2));

let teste3 = [-8, -15, -9, -5];
console.log(segundoMaior(teste3))