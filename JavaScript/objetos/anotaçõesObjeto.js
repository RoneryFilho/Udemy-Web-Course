//Modos de criar objetos:

//criação literal de objeto:
const obj1 = {};
console.log(obj1);

//Usando Object do JS
const obj2 = new Object;//podem ser definidos os parametros com {} normalmente, como qualquer outro objeto
console.log(obj2);

//Usando funções construtoras (basicamente são objetos)
function Produto(nome, preco, desc) {
    this.nome = nome; //.this torna o parametro nome publico, podendo ser acessado fora do escopo da função/objeto

    this.getProdutoComDesconto = () => { //o mesmo acontece ao usar .this aqui, tornando a função arrow um parametro publico
        return preco * (1 - desc); //os parametros preco e desc ainda são privados, pois não foi utilizado o .this para tornalos publicos
    }
}
//criando novos objetos a partir do obj Produto:
const p1 = new Produto('Notebook', 3600, 0.20);
const p2 = new Produto('Celular', 2500, 0.15);
console.log(p1, p2);
console.log(p1.getProdutoComDesconto(), p2.getProdutoComDesconto());

//Usando Função Factory
function ciarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return salario - ((salario / 30) * faltas)
        }
    }
}

const f1 = ciarFuncionario('Joao', 7980, 4);
const f2 = ciarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario())

//Usando Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
filha.idade = 19;
console.log(filha);


//Herança, exemplos:

//Aqui criei um objeto que usarei de referencia, e o chamei de objRef
const objRef = {
    nome: "Anonimo"
}
//aqui criei o objeto jose, que herdou o atributo nome de objRef
const jose = new Object(objRef);
console.log(jose.nome);
jose.nome = 'José';//aqui eu altero o atributo nome, que foi instanciado no objRef
console.log(jose.nome)

//Aqui faço a mesma coisa, porém tambem adiciono atributos que são exclusivos do novo objeto, sendo idade e genero
const pessoa1 = new Object(objRef);
pessoa1.idade = 19;
pessoa1.genero = "F";
pessoa1.nome = "Maria Joaquina";
console.log(`Nome: ${pessoa1.nome}, Idade: ${pessoa1.idade}, Gênero: ${pessoa1.genero}`);

//Aqui eu crio um novo objeto que usa pessoa1 como "pai", logo ele tem objRef como "avô"
const pessoa2 = new Object(pessoa1);
pessoa2.nome = "Sabrina";
console.log(`Nome: ${pessoa2.nome}, Idade: ${pessoa2.idade}, Gênero: ${pessoa2.genero}`);


//Previnindo o Objeto de ter mais atributos com Object.preventExtensions
const produto = Object.preventExtensions({
    nome: "Cadeira", preco: 129, tag: "Promoção"
})
console.log("É Extensivel: " + Object.isExtensible(produto)); //Checando se o objeto é extensivel(não é pois usei o preventExtensions)
produto.nome = "Notebook";
produto.preco = 3500;
produto.tag = "Desconto";
produto.peso = 25; //Não irá incluir o atributo no objeto produto, pois foi impedido a criação de novos atributos usando o Object.preventExtensions({})
console.log(produto.peso);//Dá undefined pelo atributo não existir
//OBS: ainda podem ser removidos atributos, apenas não podem ser adicionados novos quando se usa o preventExtensions({})
//Ex:
delete produto.tag;
produto.tag = "Desconto2";//Se deletado, o atributo não pode ser reinserido, pois o objeto não aceita extensões
console.log(produto)


//Object.seal faz a mesma coisa que o preventExtensions, mas tambem bloqueia o objeto de ter atributos excluidos, ela "sela" o objeto, apenas podendo ser alterado os valores dos atributos dele
const pessoa = {
    nome: "Maria",
    idade: 34,
    peso: 50
}
Object.seal(pessoa);//selando o objeto
delete pessoa.nome;//não sera excluido pq o objeto está selado
pessoa.cabelo = "Ruivo";//Não irá ser adicionado pois o objeto está selado
console.log(pessoa);

//Object.freeza congela o objeto, transformando-o em constante, não podendo serem adicionados, deletados nem alterados os parametros e seus valores;
const carro = {
    velocMax: 250, marca: "BMW"
}
Object.freeze(carro)
delete carro.velocMax;
carro.cor = "Prata";
console.log(carro);

const teste = new Produto("Carro", 8900, 0.20);
console.log(Object.keys(teste))//Object.keys(objeto) transforma o objeto em um array com seus atributos(sem seus valores) como elementos
console.log(Object.values(teste))//Object.values(objeto) transforma o objeto em array, usando ovalor de seus atributos como elementos
console.log(Object.entries(teste))//Object.entries(objeto) transforma o objeto em matriz, usando tanto os atributos como seus valores, como elementos da matriz