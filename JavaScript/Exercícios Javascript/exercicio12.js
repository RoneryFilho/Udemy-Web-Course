//pega um objeto e retorna uma copia sem um parametro escolhido

function removePropriedade(obj, atributo){
    let copia = new Object(obj); //criando novo objeto com o objeto fornecido sendo usado como "pai"
    delete copia[atributo];//não funcionou delete copia.atributo, não sei porque, apenas não deletava o atributo
    return copia;
}

console.log(removePropriedade({a: 1, b:2}, "a")); // não entendi porque precisa de aspas, mas não funciona sem elas, pesquisarei depois para entender
console.log(removePropriedade({
    id: 20,
    nome: "Caneta",
    descricao: "Não preenchido"
}, "descricao"));