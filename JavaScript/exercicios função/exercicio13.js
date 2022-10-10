//Função que detecta se é dia útil ou fim de semana

function diaUtil(dia){

    if(dia <1 || dia>7){
        console.log("Dia Inválido");
    }else{

    diaAtual = '';

    switch (dia){
        case 1: 
            diaAtual = 'Fim de Semana';
            break;
        case 2: 
            diaAtual = 'Dia útil';
            break;
        case 3: 
            diaAtual = 'Dia útil';
            break;
        case 4: 
            diaAtual = 'Dia útil';
            break;
        case 5: 
            diaAtual = 'Dia Útil';
            break;
        case 6: 
            diaAtual = 'Dia útil';
            break;
        case 7: 
            diaAtual = 'Fim de Semana';
            break;
        }              
        console.log(diaAtual)
    }
}

diaUtil(1)
diaUtil(5)
diaUtil(7)
diaUtil(9)