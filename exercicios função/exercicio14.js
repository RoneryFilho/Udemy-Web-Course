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
        return 'ERRO';
    }

    switch(cond){
        case 1:
           return 'Não vendemos essa fruta aqui';
            break;
        case 2: 
            return 'Estamos com escassez de kiwis';
            break;
        case 3: 
            return 'Aqui está, são 3 reais o quilo';
            break;
    }

}

console.log(frutas('maçã'))
console.log(frutas('kiwi'))
console.log(frutas('melancia'))
console.log(frutas('josé'))
console.log(frutas(85))