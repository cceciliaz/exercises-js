var carro = "fusca";

function mostrarCarro(){
    // var carro = fusca;
    console.log(carro);
}
mostrarCarro();
console.log(carro);
// o escopo evita conflito entre nomes


// variavel global (erro) declarar variaveis sem a palavra chave var const let cria uma variavel que pode ser acessar qualquer escopo (global) isso é um erro
function mostrarCarro1(){
    carro1 = "fusca1";
    console.log(carro1);
}
mostrarCarro1();
console.log(carro1);
// "use strict" impede isso


// escopo de funcao (Pai) variaveis declaradas no escopo pai da funcao conseguem ser acessadas pelas funções
var carro2 = "fusca2";
function mostrarCarro2(){
    var frase = "meu carro é um " + carro2;
    console.log(frase);
}
mostrarCarro2();
console.log(carro2);


// escopo de blocos variaveis criadas com var vazam o bloco por isso com a introducao do es6 a melhor forma de declarar varaiavel é ultilizando const e let pois elas respeitam o escopo de bloco
if(true){
    let mes = "dezembro";
    console.log(mes);
}
console.log(mes);


// const mantem o escopo no bloco impede a redeclaracao e impede modificacao do valor da variavel evitando bug no codigo
const mes1 = "dezembro1";
mes1 = "janeiro"; //erro tentou modificar o valor
const semana; // erro declarou sem valor

const data = {
    dia: 29,
    mes: "dezembro",
    ano: 2018,
}
data.dia = 28; //funciona
data = "janeiro"; //erro


// let mantem o escopo no bloco imoede a redeclaracao mas permite a modificacao do valor da variavel
let ano;
ano = 2019;
ano++;
console.log(ano);
let ano = 2020; // erro redeclarou o valor