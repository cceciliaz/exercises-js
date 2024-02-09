// funcao contrutora -> objeto
// funcao fabrica -> objeto
// construtora -> Pessoa(new) significa cria pessoa e inicia com letra maiuscula

function Pessoa(nome, sobrenome){
    // atributos privados nao sao acessados pelos pontos fora da funcao
    const ID = 1234;
    const metodoInterno = function (){

    };
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
console.log(p1.nome);
        console.log(this.nome + ": sou um metodo");
    }
}

const p1 = new Pessoa("ana", "bia");
const p2 = new Pessoa("pedro", "luiz");

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();