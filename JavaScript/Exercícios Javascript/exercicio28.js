//pega um objeto com nomes e um array de notas, e retorna o que teve a melhor nota

//criando metodos que podem ser acessados dentro da função
const soma = array => array.reduce((acumulador, atual) => acumulador + atual,0); //soma todos os valores do array
const media = array => soma(array)/ array.length; //divide a soma pela quantidade de notas(elementos do array)

function notasFinais(obj){
    const medias = Object.entries(obj).map(e=>{
        const chave = 0, //serve para controle, para que se chame o elemento 0 do array
              valor = 1; //mesma coisa, porem para chamar o elemento 2 do array

              return {nome: e[chave], media: media(e[valor])};//o segundo media é o metodo criado antes da função
    })
    const estudantesOrdenados = medias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media); //faz com que o estudante com a maior nota seja o primeiro no array
    const melhorNota = estudantesOrdenados[0];

    return melhorNota;
}

let estudantes = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}

console.log(notasFinais(estudantes));