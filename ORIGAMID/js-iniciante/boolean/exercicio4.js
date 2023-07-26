// verifique se fua idade é maior de que a de algum parente dependendo do resultado coloque o console de é maior ou é igual ou é menor
var minhaIdade = 20,
    irmaIdade = 20;
if(minhaIdade > irmaIdade){
    console.log("E maior que a da minha irma");
} else if(minhaIdade === irmaIdade){
    console.log("E igual que a da minha irma");
} else{
    console.log("E menor que a da minha irma");
}

// qual valor é o retorno da seguinte questao?
var expressao = (5 - 2) && (5 - " ") && (5 -2);
console.log(expressao);

// verifique se as seguintes variaveis sao truthy ou falsy
var nome = "cecilia";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!empregoFuturo, !!dinheiroNaConta, !!possuiDoutorado, !!idade, !!nome);

// compare o total de habitantes do brasil com china (valor em milhores)
var brasil = 207,
    china = 1340;
if(brasil > china){
    console.log("brasil tem mais habitantes");
} else{
    console.log("brasil tem menos habitantes");
}

// oque ira aparecer no console?
if(("Gato" === "gato") && (5 > 2)){
    console.log("verdadeiro");
} else {
    console.log("falso");
}

// oque ira aparecer no console?
if(("gato" === "gato") (5 > 2)){
    
}