//função que recebe um array e retorna outro apenas com os numeros no array

function arrayNumerico(array){
    let numeros = [];

    array.forEach(e => {
        if(typeof e == "number"){//sempre lembrar de colocar aspas quando usar o typeof em checagem condicional
            numeros.push(e)
        }
    });

    return numeros;
}

console.log(arrayNumerico(["Javascript", 1, "3", "Web", 20]));
console.log(arrayNumerico(["a", "c"]));