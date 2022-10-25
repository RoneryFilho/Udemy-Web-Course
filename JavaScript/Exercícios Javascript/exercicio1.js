//Criar função que retone e string "Olá" concatenadacom um argumento text (a ser passado em uma função) e com "!" no final

function cumprientar(text){
    return `Olá, ${text}!`;
}

console.log(cumprientar("Leonardo"));

//tentativa com .concat

function oi(text){
    let cumprimento = "Olá, ";

    return cumprimento.concat(text,"!");
}

console.log(oi('Júlia'))