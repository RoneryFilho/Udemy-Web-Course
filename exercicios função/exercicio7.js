//função que mostra se delta é positivo ou negativo
function bhaskara(a, b, c){
    
    let resultados = []
    let delta = Math.pow(b,2) - (4*a*c)
    if (delta < 0){
        return "Delta é negativo"
    }
    let x1 = (-b + Math.sqrt(delta)) / (2*a)
    let x2 = (-b - Math.sqrt(delta)) / (2*a)
    
    resultados.push(x1)
    resultados.push(x2)

    return resultados
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))