//função que recebe um numero, e imprima esse numero como quantidade de "+"

function imprimir(num){
    let mais = "";
    for(let i =0;i<num;i++){
        mais += "+";
    }
    return mais;
}

console.log(imprimir(2));
console.log(imprimir(4));