//função que arredonda um valor decimal de 2 casas decimais
function arredondado(valorDecimal){
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

arredondado(0.1 + 0.2)