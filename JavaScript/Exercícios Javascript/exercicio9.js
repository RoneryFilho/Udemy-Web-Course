//função que recebe 2 parametros, um elemento e a quantidade de vezes que ele se repetirá. No final, deverá ter um array com todas as vezes que o numero se repetiu

function repeticao(ele, quant){
    let i = 0;
    const array = [];

    for(i = 0; i < quant; i++){
        array.push(ele);
    }
    return array
}
console.log(repeticao("codigo",2));
console.log(repeticao(7,3));