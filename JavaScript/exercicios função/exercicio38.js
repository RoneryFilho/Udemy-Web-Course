//função que pega 2  numeros e imprime os impares no intervalo entre esses numeros

function parImpar(n1 = 0, n2 = 100){
    if(n1>n2){ //esse if faz com que os valores de n1 e n2 se invertam caso o n1 seja maior que o n2, porque o n1 seria o valor inicial(para fins de facilidade de compreensão)
        n1 = n1+n2;
        n2 = n1-n2;
        n1 = n1-n2;
    }

    for(i=n1; i<=n2;i++){
        if((i%2) !=0){
            console.log(i)
        }
    }

}

parImpar(12, 5)