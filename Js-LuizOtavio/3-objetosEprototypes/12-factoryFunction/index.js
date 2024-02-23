// ""
const falar = {
    falar(){
        console.log(this.nome + "esta falando");
    },
};
const comer = {
    comer(){
        console.log(this.nome + "esta comendo");
    },
};
const beber = {
    beber(){
        console.log(this.nome + "esta bebemdo");
    },
};

const pessoaPrototype = Object.assign({}, falar, beber, comer);

function CriaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}

const p1 = CriaPessoa("luiz", "otavio");
const p2 = CriaPessoa("ana", "luiza");