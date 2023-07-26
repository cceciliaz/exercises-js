// crie uma funcao e verifique se o valor é truthy:
function verificacao(){
    if(verificacao === true){
        console.log("é igual a truthy");
    } else{
        console.log("nao é igual a truthy");
    }
}
/* 
correcao:
function verificacao(dado){
    return: !!dado
}
*/

// crue uma funcao matematica que retorne o perimetro de um quadrado:
function quadrado(esquerdo, direito, cima, baixo){
    var quadrado = esquerdo + direito + cima + baixo;
    return quadrado;
}
console.log(10+10+10+10);

/* 
correcao:
function perimetro(lado){
    retunr lado + lado + lado + lado
}
*/

// crie uma fincao que retorne seu nome completo ela deve ter os parametros de nome e sobrenome
function nomeCompleto(nome, sobrenome){
    var nomeCompleto = nome +" "+ sobrenome;
    return nomeCompleto;
}
/* 
correca:
function nomeCompleto(nome, sobrenome){
    return nome + sobrenome;
}
*/

// crie uma funcao que ferifique se o numero é par
function isEven(number){
    return number / 2;
}

// crie uma funcao que verifique o tipo de dado que ela retorna
function tipoDeDado(dado){
    return typeof dado;
}

// crie um afuncao que quando der click mostre seu nome completo
addEventListener("click", function(){
    console.log("cecilia oliveira");
})

// corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados){
    return ` ainda faltam ${totalPaises - paisesVisitados} paises para viajar `;
}
function jaVisitei(paisesVisitados){
    return `ja visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}
precisoVisitar(20);

