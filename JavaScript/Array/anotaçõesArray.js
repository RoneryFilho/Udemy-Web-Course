//Não existe o tipo array em JS, arrays são objetos

//Métodos importantes de array:
//.pop(), remove o ultimo elemento, Ex:
const velozes = ['Toreto', 'The Rock', 'Paul Walker'];
velozes.pop();
console.log(velozes);

//.push() adiciona um elemento na ultima posição do array, Ex:
velozes.push('Bruce Willys');
console.log(velozes);

//.shift() remove o primeiro elemento do array, Ex:
velozes.shift();
console.log(velozes);

//.splice(posição inicial, quantos elementos serão apagados, elementos que deseja adicionar(apenas caso tenha algum para adicionar)) pode adicionar ou remover elementos
//Adicionar:
velozes.splice(1,0,'Keanu Reeves', 'Nelipe Feto','Terry Crews');
console.log(velozes);

//Remover
velozes.splice(2,1);
console.log(velozes);

//.slice(posição inicial no array, elemento final do array) cria um novo array a com os elementos a partir da posição informada, Ex:
//slice sem elemento final, pegando todos os elementos do array a partir da posição especificada:
const matadores = velozes.slice(1);
console.log(matadores);

//slice com quantidade determinada de copias:
const matadores2 = velozes.slice(0,2);//vai até o indice 2, mas não inclue o indice 2
console.log(matadores2);
