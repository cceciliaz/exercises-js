// ""
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;


function Caneca = (nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== "number") return;
            estoque = valor;
        }
    });
}
const Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const Produto = new Produto("gen", 111);
const Camiseta = new Camiseta("regata", 7.5, "preta");
const Caneca = new Caneca("caneca", 13, "plastico", 5);
Caneca.estoque = 100;

console.log(Caneca.estoque);
console.log(Caneca);
console.log(Produto);
console.log(Camiseta);