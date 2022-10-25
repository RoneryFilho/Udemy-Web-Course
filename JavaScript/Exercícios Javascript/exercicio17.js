//recebe um array de produtos(objetos) e retorna a soma dos preços

function precoTotal(array){
    let valorTotal=0;
    array.forEach(e => {
        valorTotal += e.preco;
    });
    return valorTotal.toFixed(2);
}
let teste1 = [
    {nome: "Jornal online", categoria: "Informações", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
];

console.log(precoTotal(teste1));

let teste2 = [
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
];

console.log(precoTotal(teste2));