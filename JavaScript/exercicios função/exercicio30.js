//percorre um array e imprime o maior e o maior vetor dentro do array

function maiorMenor(array){
    let maior;
    let menor;

    for(let i = 0; i<=array.length; i++){

        if(maior === undefined && menor === undefined){ /*usa a variavel menor e maior como controle para estocar o
                                                          primeiro elemento do vetor*/ 
            maior = array[i];
            menor = array[i];
        }else{
            if(array[i] >= maior){ //
                maior = array[i];
            }
            if(array[i]<=menor){
                menor = array[i];
            }
        }
    }
    return `Maior: ${maior}, Menor: ${menor}`;
}

let teste1 = [1, 3, 5, 1, 9, -8, 95,-1,3];
let teste2 = [-45, 4, 4, -98, 3];
let teste3 = [924, -9, -5, 15, 924, 5,6,-10,2];

console.log(maiorMenor(teste1));
console.log(maiorMenor(teste2));
console.log(maiorMenor(teste3));
