const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de lapis", "preco": 41.22 }',   
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json); // converte texto pra objeto

const apenasPreco = produto => produto.preco; //extrai o parametro "preco" do objeto

const resultado = carrinho.map(paraObjeto).map(apenasPreco); // transforma as strings em objeto, depois extrai somente o "preco" sando a função apenasPreco
console.log(resultado);