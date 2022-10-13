//le um array de inteiros e diz quantos são pares e impares

function parOuImpar(array){
    
    let impares = 0;
    let pares = 0;
    let i;
    
    for(i in array){
        if((array[i] % 2) == 0){
            pares ++;
        }else{
            impares++;
        }
    }
    console.log(`ímpares: ${impares} Pares: ${pares}`);
}

num = [0, 1, 2, 3, 4,, 5, 6 ,7, 8, 9];

parOuImpar(num);
