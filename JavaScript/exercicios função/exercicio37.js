//funções para progressão aritmetica e geometrica

function progAri(n, a1, razao){
    let soma = 0
    for(let i=0; i<n; i++){
        console.log(a1+ razao*i); //razao*i funciona pq o primeiro elemento de i é 0
        soma += (a1+ razao*i)
    }
    
    console.log(`Soma: ${soma}`);
}

function progGeo(n, a1, razao){
    let soma = 0
    for(let i=0; i<n; i++){
        if(i==0){
            console.log(a1)
            soma += a1
        }else{
            console.log(a1 * (razao**i));
            soma += (a1 * (razao**i));
        }
    }
    console.log(`Soma: ${soma}`);
}

progAri(10, 10, 15);
progGeo(10, 5, 3);