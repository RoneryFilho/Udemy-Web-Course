//calcula a media ponderada

function media(cod, n1, n2, n3){

    if(cod<0){
        console.log('CÓDIGO INVÁLIDO');
    }else{
        
        mediaF = (n1 * 4 + n2 * 3 + n3 * 3)/10;

        console.log(`Código do aluno: ${cod}, Notas: ${n1}, ${n2}, ${n3}, Média: ${mediaF}, ${mediaF < 5 ? 'Reprovado' : 'Aprovado' }`);
        
    }
}
media(123, 2.8, 6, 3.5);