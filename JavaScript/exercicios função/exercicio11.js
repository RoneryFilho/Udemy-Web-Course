//calculando se um ano é ou não bissexto

function anoBissexto(ano){

    if(ano<=0){
        return false
    }
    else if((ano % 100)==0){
        return false
    }else if((ano%4)==0){
        return true
    }else{
        return false
    }
}

console.log(anoBissexto(2022))
console.log(anoBissexto(2020))
console.log(anoBissexto(2010))
console.log(anoBissexto(2016))