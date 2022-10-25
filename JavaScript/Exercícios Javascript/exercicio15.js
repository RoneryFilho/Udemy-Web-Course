//recebe um array e retorna os elementos pares que tambem tem o índice par

function somentePares(array){
    let pares = [];

    array.forEach((e, index) => {
        if((e%2) == 0 && (index%2) == 0 ){
            pares.push(e);
        }
    });
        return pares;
}

console.log(somentePares([10, 70, 22, 43]));
console.log(somentePares([1, 2, 3, 4]));