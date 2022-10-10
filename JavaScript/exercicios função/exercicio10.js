//detectando se um numero é divisivel por 3 e retornando true ou false

function verificaNumero(num){

    let numDiv = num%3

    if(numDiv==0){
        return true
    }else
    return false
}

console.log(verificaNumero(3))
console.log(verificaNumero(6))
console.log(verificaNumero(15))
console.log(verificaNumero(5))
console.log(verificaNumero(2))