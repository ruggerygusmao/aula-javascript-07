/* 1)      Para a string texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.", exibir no console:
a)       O número de caracteres da string.
b)      A string com todas suas letras em maiúsculo.
c)       O número de vogais da string.
d)      A string com todas suas letras em minúsculo.
e)      Fazer a busca pela palavra humanidade e exibir o index onde ela está.
*/

var texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.";

console.log("Número de caracteres: "+texto.length);
console.log(texto.toUpperCase());
function contarVogais(valor){
    let numVogais = 0;
    valor = valor.toString();
    for(var i=0; i < valor.length;i++){
        if(valor.charAt(i)=="a" || valor.charAt(i)=="e" ||
        valor.charAt(i)=="i" || valor.charAt(i)=="o" ||
        valor.charAt(i)=="u"
        ){
            numVogais +=1;
        }
    }
    return numVogais;
}

console.log("Número de Vogais: "+contarVogais(texto));
console.log(texto.toLowerCase());
console.log("A palavra está na posição: "+texto.indexOf("humanidade"));
