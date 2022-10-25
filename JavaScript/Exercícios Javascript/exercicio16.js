//função que checa se o ano é bissexto

function anoBissexto(ano){
    if((ano%400)==0){
        return true;
    }else if((ano%4)==0 && (ano%100)!== 0 ){
        return true;
    }else{
        return false;
    }
}

console.log(anoBissexto(2020));
console.log(anoBissexto(2100));