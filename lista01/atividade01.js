/*1) Criar um array com os nomes de 7 cidades de Pernambuco:
a) Ordenar seus elementos na ordem invertida.
b) Exibir no console.
c) Adicionar duas cidades usando splice().
d) Exibir no console. */

var cidades = ["cabo","escada","ipojuca","prazeres","piedade","candeias","Olinda"];
console.log(cidades.reverse());

cidades.splice(0,2,"recife","jaboatão");
console.log(cidades);