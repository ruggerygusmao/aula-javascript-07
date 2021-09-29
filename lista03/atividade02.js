/*2)      Percorrer os números pares menores que 100.
a)       Adicionar em um array.
b)      Transformar o array em string.
c)       Exibir no console. */
var  pares = [];
    for(var i=0; i <100; i++){
        if((i%2)==0){
            pares[i] = i;
        }
    }
console.log(pares.join());