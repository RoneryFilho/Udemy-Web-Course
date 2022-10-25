//função que recebe um array e retorna o primeiro e ultimo elemento dele

function primeiroUltimo(array){
    let primeiro = array.slice(0,1);
    let ultimo = array.slice(-1);
    let arrayF = []
    return arrayF.concat(primeiro,ultimo);
}

const teste = [7, 2, 'abacaxi', 90, "williem"];
const teste2 = ['joão', 78, 9]
console.log(primeiroUltimo(teste));
console.log(primeiroUltimo(teste2));