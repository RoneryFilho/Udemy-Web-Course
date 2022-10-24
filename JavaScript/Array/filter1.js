//Filtra um array de acordo com as condições pedidas

const produtos = [
    {nome: 'Notebook', preco: 2449, fragil: true},
    {nome: 'I-Mac Pro', preco: 7999, fragil: true},
    {nome: 'Galaxy A10', preco: 1989,fragil: false},
    {nome: 'Headset Razer', preco: 499, fragil: true}
];

console.log(produtos.filter(function(p){ // filtrando para apenas retornar o valor dos atributos p(indice no array) apenas se forem superiores a 2000
    return p.preco > 2000;
}));

//DESAFIO DE FAZER VOLTAR SÓ O QUE É CARO (MAIS DE 500) E FRAGIL
console.log(produtos.filter(function(p){
    
    /*if((p.preco > 500) && p.fragil === true){ <-- JEITO QUE EU RESOLVI ORIGINALMENTE
        return p
    }*/
    return p.preco > 500 && p.fragil === true; // Vi esse jeito num comentario e preferi, porque não sabia que return podia ter condicionais e achei interessante e mais enxuto
}))
