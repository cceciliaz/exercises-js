const entrada1 = window.prompt("informe o primeiro numero:");

const entrada2 = window.prompt("informe o segundo numero:");

const x = parseFloat(entrada1);

const y = parseFloat(entrada2);

const soma = x + y

const subtracao = x - y

const multiplicacao = x * y

const divisao = x / y

alert(
    "resultados:\n" +
    "\nsoma: " + soma +
    "\nsubtracao " + subtracao +
    "\nmultiplicacao " + multiplicacao +
    "\ndivisao " + divisao
);