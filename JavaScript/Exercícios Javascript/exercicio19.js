//calcula a area de um triangulo (usando apenas base e altura)

function areaTriangulo(base, h){
    let area = (base * h)/2;
    return area.toFixed(2);
}

console.log(areaTriangulo(10, 15));
console.log(areaTriangulo(7, 9));
console.log(areaTriangulo(9.25, 13.1));