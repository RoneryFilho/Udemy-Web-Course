//calculando valor de um plano de saude baseado na idade

function planoSaude(idade){
    
    if(idade>60){
        return  100 + 130;
    }else if(idade <= 60 && idade > 30){
        return 100 + 95;
    }else if(idade >= 10 && idade <= 30){
        return 100 + 50;
    }else{
        return 100 + 80;
    }

}

console.log(planoSaude(8));
console.log(planoSaude(30));
console.log(planoSaude(35));
console.log(planoSaude(60));
console.log(planoSaude(85));