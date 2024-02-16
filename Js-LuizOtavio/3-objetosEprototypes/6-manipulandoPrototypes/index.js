// ""
const objA = {
    chaveA: "A";
};
const objB = {
    chaveB: "B"
};
const objC = new Object();
objC.chaveC = "C";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA)

// ---------

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(percetual){
    this.preco = this.preco - (this.preco * (percetual / 100));
};
Produto.prototype.aumento = function(percetual){
    this.preco = this.preco + (this.preco * (percetual / 100));
};
const p1 = new Produto("camiseta", 50);
console.log(p1);

const p2 = {
    nome: "caneca",
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

const p3 = Object.create(Produto.prototype,{
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});
p3.aumento(10);
console.log(p3)