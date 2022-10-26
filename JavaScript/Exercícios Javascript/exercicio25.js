//pega um objeto com atributos e valores, e transforma os valores em atributos e os atributos em valores (inverte eles)

function inverteAtributos(obj){
    const valoresInvertidos = Object.entries(obj).map(chaveValor => chaveValor.reverse());

    return Object.fromEntries(valoresInvertidos); //cria um objeto a partir do array fornecido
}

const teste1 = {a: 1, b: 2, c: 3};
console.log(inverteAtributos(teste1));