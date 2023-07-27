/*
objetos conjunto de variaveis e funcoes que sao chamadas de propriedades e metodos:
var pessoa = {
    nome: "cecilia",
    idade: 20,
    profissao: "atleta",
    possueFaculdade: true,
}
para chamar um objeto colocar o pessoa.nome; e ele vai retornar o cecilia
*/



// metodos é uma propriedade  que possui uma funcao no local do seu valor
// quadrado vai ser o objeto
var quadrado = {
    // lado é um valor fixo logo ele vai ser uma profriedade 
    lados: 4,
    // area vai ser o nome da funcao define o nome e coloca : depois passa function e o parametro dela e a funcao area depende de lados pois ele precisa receber um argumento que no caso é lado
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        // this.lado é como se fosse o proprio quadrado como ele nao consegue chamar a propriedade lados colocando this da para chamala.
        return this.lado * lado;
    },
}


// um objeto é criado usando as chaves
var carro = {};
var pessoa = {};
console.log(typeof carro); //objeto 



