// operadores de atribuicao podem funcionar como formas abreviadas
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)

// usando abreviacaoes
var numero = 20;
// numero = numero + 10;
numero += 10;
console.log(numero);

// operadores ternario abreviacao de condicionais com if e else
var idade = 19;
var podeBeber = (idade >= 18) ? "pode beber" : "nao pode beber";
console.log(podeBeber)
// primeiro coloca uma condicao no caso idade >=18, e se essa condicao for verdadeira ele retorna true no caso que tem depois do ponto de ? pode ser string boleano... e se falso coloca : e passa o valor


// if abreviado nao é necessario abrie e fechar as chaves {} quando retornamos apenas uma linha de codigo
var possuiFaculdade = true;
if(possuiFaculdade) console.log("possui faculdade");
else console.log("nao possui faculdade");

// ou
if(possuiFaculdade)
console.log("possui faculdade");
else
console.log("nao possui faculdade");