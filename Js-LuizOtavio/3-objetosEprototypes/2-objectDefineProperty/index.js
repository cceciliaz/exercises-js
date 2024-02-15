// "", defineProperty - defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, "estoque",{
        enumerable: true,
        value: estoque,
        writable: true
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });
}
const p1 = new Produto("camisa", 20, 3);
p1.estoque = 500; // mudando o esque pois esta com o valor de true se tivesse false nao daria para mudar
