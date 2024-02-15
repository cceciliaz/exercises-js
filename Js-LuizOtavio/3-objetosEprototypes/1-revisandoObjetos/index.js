// ""
const pessoa = {
    nome: "luz",
    sobrenome: "oliveira"
};

const chaves = "sobrenome";
console.log(pessoa["sobrenome"]);
console.log(pessoa[chaves]);

// ----------

const pessoa1 = new Object();
pessoa1.nome = "ana";
pessoa1.sobrenome = "oliveira";
pessoa1.idade = 30;
pessoa1.falarNome = function(){
    return (this.nome + "esta falando");
}
pessoa1.falarNome();

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chaves in pessoa1){
    console.log(pessoa1[chaves]);
}

// delete pessoa1.nome;
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

const pessoa2 = {
    nome: "maria",
    sobrenome: "oliveira"
};
console.log(pessoa1, pessoa2);