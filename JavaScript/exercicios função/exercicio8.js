//exercicio pontuaçoes
let stringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function pontuacoesJogos(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let quebraRecordes = 1
    let piorJogo = 1
    let menorPontuacao = pontuacoes[0]
    let maiorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            quebraRecordes++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1
        }
    }
    return [quebraRecordes, piorJogo]
}

console.log(pontuacoesJogos(stringPontuacoes))