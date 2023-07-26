// defini funcao:
function areaQuadrada(){
    console.log("funcao ativada");
}
// ativando funcao:
areaQuadrada();


// funcao, vem primeiro o nome da funcao "imc" e os parametros dela "peso, altura"
function imc(peso, altura){
    var imc = peso / (altura * altura);
    // a baixo vai retornar o calculo do var 
    return imc;
}
// no console estou passando o argumento do parametro
console.log(imc (80, 2));

// 
function corFavorita(cor){
    if(cor === "azul"){
        return "eu gosto do ceu";
    } else if(cor === "verde"){
        return "eu gosto de mato";
    } else{
        return "eu nao gosto de cores";
    }
}

/* argumentos tambem podem ser funcoes e sao chamadas de callback geralmente sao funcoes que ocorrem apos algum evento

addEventeListener("click", function(){
    console.log("clicou");
});

a funcao a cima possui dois argumentos 
o primeiro é uma string "click"
o segundo é uma funcao anonima funcoes anonimas sao as que o nome nao é definido
*/

addEventListener("click", function(){
    console.log("oi vc ativou a funcao");
});