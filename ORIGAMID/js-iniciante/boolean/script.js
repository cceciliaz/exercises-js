/*
verificar se uma expressao é verdadeira com if, caso contrario o else sera ativado
*/ 
var possuiGraduacao = true;
if(possuiGraduacao){
    console.log("possui graduacao");
} else{
    console.log("nao possui graduacao");
}

/*
condicionais else if
se o if nao for verdadeiro ele testa o else if
*/
var possuiFaculdade = true;
var possuiDoutorado = false;
if(possuiDoutorado){
    console.log("falso ele nao possui ddoutorado");
} else if(possuiFaculdade){
    console.log("verdadeiro ele possui faculdade");
}

/*
existem valores que retornam true e outros que retornam false quando verificados em uma expressao booleana

if(falsle)
if(0) ou -0
if(NaN)
if(null)
if(undefined)
if("") ou "" ou aspas unicas´´
*/
var nome = "";
if(nome){
    console.log(nome);
} else{
    console.log("nome nao existe");
}
/*
thuthy
if(true)
if(1)
if(" ")
if("cecilia")
if(-5)
if({})
*/

/*
operador ! nega uma operacao booleana pu seja !true é igual a false

if(!true); false
if(!1); false
if(!""); false
if(!undefined); false
if(!!" "); false
if(!!""); false
*/

/*
operadores de comparacao
vao sempre retornar um valor booleano
10 > 5; true
5 > 10; false
20 < 10; false
10 <= 10; true
10 >= 11; false
*/

// = é pra atribuir valor ex x = 10 e === é para comparar 
var x = "Gato";
console.log(x === "gato");

// !== é o diferente
console.log(x !== "gato");
// 
var corFavorita = "vermelho";
switch(corFavorita){
    // ele vai ativar o console se verdade
    case "azul":
    console.log("olhe para o ceu");
    // break é para parar de ler o codigo se for verdadeiro
    break;
    case "amarelho":
        console.log("olhe para baixo");
    break;
    // caso nenhuma seja verdadeira vai ativar o default
    default:
        console.log("fechar os olhos");
}