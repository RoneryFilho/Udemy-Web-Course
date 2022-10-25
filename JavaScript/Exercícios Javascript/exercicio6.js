//retorna o inverso de um numero ou valor booleano

function inverso(num){
    const tipo = typeof num
    if(tipo == "boolean"){
        return !num;
    }else if(tipo == "number"){
        return -num
    }else{
        return `Apenas valores númericos e booleanos serão aceitos, o valor inserido é de tipo ${tipo}`;
    }
}

console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("Programação"));
