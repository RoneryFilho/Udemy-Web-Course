//calcula a media aritmetica de um array usando seus elementos como valores.

function mediaArit(notas){
    let soma = 0;
    for (let i=0; i<notas.length;i++){
        soma += notas[i];
    }
    return soma/notas.length
}

const teste1 = [1, 2, 3, 4, 5];

console.log(mediaArit(teste1))
/* OBS PRA MIM MESMO:
    Tinha dado erros porque eu coloquei i<=notas.lenght, sendo que pelo i começar em 0, ja iria dar o
  tamanho do array, porque o array começa no elemento 0.
  Também tinha dado problema porque eu não atribui valor para a variavel soma, que ficou undefined 
  por padrão, mas voltou a funcionas quando eu defini como 0*/