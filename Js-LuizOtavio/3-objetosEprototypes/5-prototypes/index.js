// ""
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + " " + this.sobrenome;
};

const Pessoa1 = new Pessoa("ana", "o.");
const Pessoa2 = new Pessoa("maria", "a.");
const data = new Date();

console.dir(Pessoa1);
console.dir(data);
