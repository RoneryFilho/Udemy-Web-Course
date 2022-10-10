function nota(n1){

    let valor;
    let resto;

    if(n1>=38){
        valor = Math.floor(((n1/5)) + (1)) * 5;

        if((valor - n1) < 3){
            n1 += (valor - n1);
            valor = n1;
        }

        if(valor > 100){
            valor = 100;
        }

        console.log(`Aprovado com nota ${valor}`);
        
    }else{
    console.log(`Reprovado com nota ${n1}`);
    }
}

nota(100);
nota(30);
nota(38);
nota(88);
nota(61);