//recebe numeros inteiros positivos e multiplique-os sem usar o operador de multiplicação "*"

function multiplique(n1, n2) {
    let int1 = Number.isInteger(n1);
    let int2 = Number.isInteger(n2);
    let i = 0;
    let resultado = 0;
    if (int1 || int2) {
        if (n1 < 0 || n2 < 0) {
            return 'O NÚMERO PRECISA SER MAIOR DO QUE ZERO';
        }else{
            for(i=0; i<n2; i++){
                resultado += n1;
            }
            return resultado;
        }
    }else{
        return 'Números precisam ser inteiros';
    }
}

console.log(multiplique(5,5));
console.log(multiplique(0,7));
