//switch carros

function carro(modelo){


    switch(modelo){
        case 'hatch':
           return 'Compra efetuada com sucesso';
            break;
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete': 
            return 'Tem certeza que não prefere esse modelo?';
            break;
        default: 
            return 'Não trabalhamos com esse tipo de automóvel aqui';
            break;
    }

}

console.log(carro('hatch'))
console.log(carro('sedan'))
console.log(carro('avião'))
console.log(carro('jorge'))
console.log(carro(5))