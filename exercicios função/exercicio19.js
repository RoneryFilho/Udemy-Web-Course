//calculando quantidade * valor de um produto baseado em seu código

function produto(cod, quant){

    switch(cod){
        case 100:
            return quant * 3.00;
        case 200:
            return quant * 4.00;
        case 300:
            return quant * 5.50;
        case 400:
            return quant * 7.50;
        case 500:
            return quant * 3.50;
        case 600:
            return quant * 2.80;
        default:
            return 'Produto não existente';
        }

}

console.log(produto(100, 3));
console.log(produto(200, 5));
console.log(produto(300, 10));
console.log(produto(400, 10));
console.log(produto(500, 20));
console.log(produto(600, 10));
console.log(produto(700, 85));