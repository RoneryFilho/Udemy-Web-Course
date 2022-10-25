//função que recebe um numero, gera um numero aleatorio e compara se os numeros sao o mesmo

function bingo(num) {
    let randomNum = Math.floor(Math.random() * 11); //math.random gera um numero aleatorio entre 0 e 1, multiplicando por 10 o limite se torna 10
    if (num == randomNum) {
        return `Parabéns! O número sorteado foi o ${randomNum}`;
    } else {
        return `Que pena! O número sorteado foi o ${randomNum}`;
    }
}

console.log(bingo(10));