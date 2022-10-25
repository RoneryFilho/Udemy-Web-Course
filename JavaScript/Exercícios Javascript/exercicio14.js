//pega um objeto e retorna um array com os atributos do objeto como elementos

function objetoArray(obj){
    let array = Object.entries(obj);//Object.entries(objeto) retorna os atributos do objeto(e seus valores) como elementos de uma matriz composta por eles

    return array
}

console.log(objetoArray({
    nome: "Maria",
    prifissao: "Desenvolvedora de software"
}));

console.log(objetoArray({
    codigo: 1111,
    preco: 12000
}));