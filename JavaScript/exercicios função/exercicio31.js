//le um array e imprime quantos negativos existem nele

function negativos(array){
    let neg = 0;

    for(let i=0; i<=array.length;i++){
        if(array[i]<0){
            neg ++;
        }
    }
    return neg;
}

let teste1 = [-1, 4, 6, -3, -4, -4, 9];
let teste2 = [1, 423, 6, 5, -4, 15];
let teste3 = [-1, -4, -1, -2, 4, -15];

console.log(negativos(teste1));
console.log(negativos(teste2));
console.log(negativos(teste3));