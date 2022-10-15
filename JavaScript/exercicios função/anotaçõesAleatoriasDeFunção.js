
function criarProduto(produto, preco, desconto = 0.1){  //Criando uma função factory que retorna um objeto
    return {
        produto,
        preco,
        desconto: `${desconto * (100)}%`
    }
}

const prodCarro = criarProduto('Carro', 50000); //criando objetos com base nos parametros e atributos da função factory
console.log(prodCarro);

const notebook = criarProduto('Notebook', 2499.90);
console.log(notebook);



//Criando uma função usando função construtora
function pessoa(nome){
    this.nome = nome;

    this.falar = function(){
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}

const p1 = new pessoa('José');
p1.falar();

//criando uma função usando classe
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Olá, meu nome é ${this.nome}`) // precisa ser usado o this nesse contexto, por causa do escopo
    }
}

const p2 = new Pessoa('Josefino');
p2.falar();