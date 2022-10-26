//função que tira todas as vogais de uma string

function tiraVogais(string){
    let consolantes = '';
    consolantes = string.replace(/[a,e,i,o,u]/g, '');//.replace(/[caracteres]/g, 'valor que irá substitui-los')
    return consolantes;
}

console.log(tiraVogais("Cod3r"));
console.log(tiraVogais("Fundamentos"));