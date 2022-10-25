const alunos = [
    {nome: "João",nota: 7.3, bolsista: false},
    {nome: "Maria",nota: 9.2, bolsista: true},
    {nome: "Pedro",nota: 9.8, bolsista: false},
    {nome: "Ana",nota: 8.7, bolsista: true}
];

//Desafio 1: Todos os alunos são bolsistas?

const todosBolsa = (resultado, bolsista) => resultado && bolsista; // "resultado && bolsista" é uma comparação lógica, que só terá retorno true se ambos forem verdadeiros
console.log(alunos.map(a => a.bolsista).reduce(todosBolsa));//usando o map para criar um array só com a informação dos bolsistas, depois usando o reduce para checar se todos são bolsistas

//Desafio 2: Algum aluno é bolsista?

const algumBolsa =(resultado, bolsista) => resultado || bolsista;// "resultado || bolsista" retorna true se algum dos elementos for true
console.log(alunos.map(a => a.bolsista).reduce(algumBolsa));