// "", filter, map, reduce
// retornar os numeros maior que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
function callbackFiltter(valor, indice, array){
    return valor > 10;

    /*
    if(valor > 10){
        return true;
    }else{
        return false;
    }
    */
}
const numerosFiltrados = numeros.filter(callbackFiltter);
/*
forma mais usual:

const numerosFiltrados = numeros.filter(function(valor){
    return valor > 10;
});
*/
console.log(numerosFiltrados);


// -------------

// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo o nome termina com a
const pessoas =[
    {nome: "luiz", idade: 62},
    {nome: "maria", idade: 23},
    {nome: "eduardo", idade: 55},
    {nome: "leticia", idade: 19},
    {nome: "rosana", idade: 32},
    {nome: "wallace", idade: 47},
]

const pessoasComNomesGrandes = pessoas.filter(function(obj){
    return obj.nome.length >= 5;
});
console.log(pessoasComNomesGrandes);

const pessoasComMaisDecinquenta = pessoas.filter(function(obj){
    return valor.idade > 50;
});
console.log(pessoasComMaisDecinquenta);

const nomeTerminaComA = pessoas.filter(function(obj){
    return obj.nome.toLowerCase().endsWith("a");
});
console.log(nomeTerminaComA);
