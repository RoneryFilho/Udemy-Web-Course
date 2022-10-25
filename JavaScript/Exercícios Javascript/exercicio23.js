//Checa se uma string fornecida está contida nas palavras de um array

function palavraContida(string, array){
    let palavras = [];
    array.forEach(e => {
        if((e.includes(string) == true)){
            palavras.push(e);
        };
    });
    return palavras;
}

console.log(palavraContida("pro", ["programação", "mobile", "profissional"]));
console.log(palavraContida("python", ["javascript", "java", "c++"]));
//OBS: Pesquisar sobre como comparar independende de maiúsculas ou minúsculas