//é como se fosse um forEach, porém ele cria outro array baseado no array usado de referencia

const nums = [1, 2, 3, 4, 5];

let dobro = nums.map(function(e){ // parametro "e" é o elemento do array, pois é uma função callback
    return e * 2;
})

console.log(dobro);

soma10 = e => e + 10; // o parametro "e" existe na função do map da let dobro declarada a cima
triplo = e=> e * 3;
paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace(".", ",")}` ;

let resultado = nums.map(soma10).map(triplo).map(paraDinheiro);//cria um array com a soma de cada elemento do nums +10, depois multiplica por 3 e depois imprime a string definida em paraDinheiro

console.log(resultado);
