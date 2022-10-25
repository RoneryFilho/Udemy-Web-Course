//função que diz se o primeiro é maior que o segundo

function maior(n1,n2){
    if(typeof n1 !== typeof n2){
        return false
    }else{
        return n1>=n2;
    }
}

console.log(maior(4,2));
console.log(maior(2,4));
console.log(maior(0, '0'));