//função que calcula o valor de anuidade

function anuidade(mes, valor){  
    if (mes>0 && mes<13){
        atraso = mes - 1
        return ((valor * (1 + (5/100))**atraso).toFixed(2));
    }
}

console.log(anuidade(4, 100));