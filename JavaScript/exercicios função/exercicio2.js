//função que imprime o tipo de triangulo baseado nos valores dos parametros
function triangulos(a,b,c){
    if(a==b && b==c){
        return 'Triângulo Equilátero'
    }else if(a==b || b==c || c==a){
        return 'Triângulo Isósceles'
    }else if (a!=b && b!=c){
        return 'Triângulo Escaleno'
    }
}

console.log(triangulos(1,1,1))
console.log(triangulos(1,2,1))
console.log(triangulos(1,2,3))
