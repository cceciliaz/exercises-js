// qual o resultado da seguinte?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// crie duas expressoes que retornem NaN
var comida = "pizza",
    cidade = "rio";
console.log(+comida, -cidade);

// somar a string "200" com o numero 50 e retornar 250
var teste1 = "200",
    teste2 = 50;
console.log(+teste1 + teste2);

// incremente o numero 5 e retorne seu valor incrementado
var total = 5;
console.log(total++);
console.log(total);

/* como dividir o peso por 2 ?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade;
var pesoPorDois = peso / 2;

console.log(); */

var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade;
console.log(peso);