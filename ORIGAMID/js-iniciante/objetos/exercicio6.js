// crie um objeto com os seus dados pessoas deve possuir pelo menos duas propriedades nome e sobrenome:
var dadosPessoas = {
    nome:"cecilia",
    sobreNome:"oliveira",
    idade: 20,
    estado: "rio grande do norte",
}

// crie um metodo no onjeto anterior que mostre o seu nome completo:
dadosPessoas.nomeCompleto = function (){
    return `${this.nome} ${this.sobreNome}`;
}


// modifique o valor da propriedade preco para 3000:
var carro = {
    preco: 1000,
    portas: 4,
    marca: "glaz",
}