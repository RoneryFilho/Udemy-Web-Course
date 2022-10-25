//função recebe string e conta quantas palavras tem nela
function contaPalavras(string){
    let palavras = string.split(" ");
    let control = 0;
    palavras.forEach(element => {
        control++
    });
    return control;
};

console.log(contaPalavras("Sou uma frase"));
console.log(contaPalavras("Me divirto aprendendo a programar"));
console.log(contaPalavras("Eu sou uma frase com 7 palavras!"))