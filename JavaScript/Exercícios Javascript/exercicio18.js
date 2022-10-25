//calcula a media simples(aritmetica) da soma dos valores de um array

function mediaSimples(array){
    let soma = 0;
    let media = 0;

    array.forEach(e => {
        soma +=e;
    });

    media = soma/array.length;
    return media;
}

let teste1 = [0, 10];
let teste2 = [1, 2, 3, 4, 5];

console.log(mediaSimples(teste1));
console.log(mediaSimples(teste2));