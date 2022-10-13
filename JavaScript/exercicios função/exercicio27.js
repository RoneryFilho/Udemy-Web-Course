//calcula a taxa de crescimento e diz quando uma criança ultrapassara a altura da outra

function alturas(alt1, taxa1, alt2, taxa2){

    if(alt1==alt2){
        if(taxa1==taxa2){
            return 'Ambas tem a mesma altura'
        }else if(taxa1>=taxa2){
            return 'A criança menor não ultrapassará a maior';
        }else if(taxa2>taxa1){
            return 'A criança menor irá ultrapassar a criança maior em 1 ano';
        }
    }
    if(alt1>alt2){
       if(taxa1>=taxa2){
            return 'A criança menor não ultrapassará a criança maior';
       }else if(taxa2>taxa1){

        return `A criança menor irá ultrapassar a maior em ${calculoTempo(alt1,taxa1,alt2,taxa2)} anos`;

       }
    }else if(alt2>alt1){
        if(taxa2>=taxa1){
             return 'A criança menor não ultrapassará a criança maior';
        }else if(taxa1>taxa2){
 
         return `A criança menor irá ultrapassar a maior em ${calculoTempo(alt2,taxa2,alt1,taxa1)} anos`;
 
        }
     }
}

function calculoTempo(altMaior, taxaMaior, altMenor, taxaMenor){

    let anos = 0;

    while(altMaior>altMenor){
        altMaior += taxaMaior;
        altMenor += taxaMenor;
        anos ++;
    }
    return anos;
}

console.log(alturas(150, 2, 150, 2));
console.log(alturas(150, 2, 150, 3));
console.log(alturas(150, 3, 180, 2));
console.log(alturas(180, 2, 150, 3));
console.log(alturas(150, 3, 150, 2));
console.log(alturas(130, 3, 180, 2));
console.log(alturas(180, 2, 130, 3));
console.log(alturas(150, 2, 130, 4));