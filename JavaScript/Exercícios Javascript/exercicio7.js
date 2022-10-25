//dentro do intervalo

function intervalo(num, max, min, inc = false){
    if(inc){ // por padrão ja checa se o inc é true quando colocado como condicional no if
        if(num==min || num==max){
            return true;
        }else{
            return false;
        };
    }else{
        if(num > min && num < max){
            return true;
        }else{
            return false;
        }
    }
}

console.log(intervalo(10, 50, 100));
console.log(intervalo(16, 100, 160));
console.log(intervalo(3, 3, 150));
console.log(intervalo(3, 3, 150,true));