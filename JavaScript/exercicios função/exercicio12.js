//calcula o fatorial de um numero

function fatorial(num){

    let fator = num

    for(i=num;i>1;i--){
        fator=fator*(i-1);
    }
    return fator
}

console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))