/*
operadores aritmeticos

var soma = 100 + 50; > 1050
var subtracao = 100 - 50; > 50
var multiplicacao = 100 * 2; > 200
var divisao = 100 / 2; > 50
var expoente = 2 ** 4; > 16
var modulo = 14 % 5; > 4

*/

var testeNaN = "100 reais" / 2;
console.log(isNaN(testeNaN));

/* comeca por multiplicacao e divisao depois por soma e subtracao 


pois comeca com 5 vezes 2 e depois o resultado é somado com o 20
var total1 = 20 + 5 * 2; > 30


aqui ele priorisa quem esta dento do ()
var total2 = (20 + 5) * 2; > 50


*/


/*
operadores aritmeticos unarios

aqui ele so vai adicionar o valor do incremento se der outro console.log
var incremento = 5;
console.log(incremento++); > 5

ja aqui ele ja vai dar o console com o valor do incremento adicionado
console.log(++incremento); > 6

*/
var x = 1;
console.log(++x);

/* 
operadores aritmeticos unarios
o + e o - tenta transformar o valor em um numero

var frase = "teste";
+frase; vai dar o valor de Nan

var idade = "20";
+idade; vai transformar a string em numero
-idade; vai transformar a string em numero negativo

*/
var idade = "20";
console.log(+idade + 5);

var idade = "20";
console.log(-idade + 5);