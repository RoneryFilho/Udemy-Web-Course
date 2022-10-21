const aprovados = ['Junior', 'Rafaela', 'Rajeet', 'Douglas'];

aprovados.forEach(function(nome, indice, array){ //forEach usa uma função(nesse caso callback) de até tres parametros, o promeiro sendo elemento no array, o segundo sendo o indice(posição) e o terceiro sendo o proprio array
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
})
