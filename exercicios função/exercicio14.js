//switch frutas

function frutas(fruta){
    
    cond = 0;

    if(fruta=='maçã'){
        cond = 1;
    }else if(fruta =='kiwi'){
        cond = 2;
    }else if(fruta=='melancia'){
        cond = 3;
    }else{
        console.log("ERRO");
    }

    switch(cond){
        case 1:
           console.log('Não vendemos essa fruta aqui')
            break
        case 2: 
            console.log('Estamos com escassez de kiwis')
            break
        case 3: 
            console.log('Aqui está, são 3 reais o quilo')
            break
    }

}

frutas('maçã')
frutas('kiwi')
frutas('melancia')
frutas('josé')
frutas(85)