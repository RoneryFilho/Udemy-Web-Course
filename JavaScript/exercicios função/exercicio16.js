function calculadora(n1, oper, n2) {

    switch (oper) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        default:
            return 'OPERAÇÃO INVÁLIDA';
    }

}

console.log(calculadora(2, '+', 3));
console.log(calculadora(5, '-', 2));
console.log(calculadora(10, '*', 15));
console.log(calculadora(15, '/', 3));
console.log(calculadora(10, 'josé', 4));

