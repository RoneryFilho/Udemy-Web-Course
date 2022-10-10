//duas funções, uma calculando juros simples e a outra juros compostos
function jurosSimples(capital, taxa, tempo){
    valor = `R$ ${capital+(capital*taxa*tempo)}`
    console.log(valor)
}

function jurosCompostos(capital, taxa, tempo){
    valorMontante = `R$ ${capital+(capital*(1+taxa)**tempo)}`
    console.log(valorMontante)
}

jurosSimples(10, 10/100,2)
jurosCompostos(10, 10/100, 2)