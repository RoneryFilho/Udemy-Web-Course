//ve quantos numeros no array estão no intervalo entre 10 e 20 e quantos nao estao

function intervalo(array){
    let dentro = 0;
    let fora = 0;

    for(let i in array){
        if((array[i]>=10) && (array[i]<=20)){
            dentro ++;
        }else{
            fora ++;
        }
    }
        return `Dentro: ${dentro}, Fora: ${fora}`;
}

let teste = [1, 15, 20, 23, 10, -10, 80]

console.log(intervalo(teste));