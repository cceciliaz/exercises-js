/*
object.values
object.entries
object.assign(des, any)
object.getOwnPropertyDescriptor(o, "prop")
...(spread)

- ja vimos
object.keys(retorna chaves)
object.freeze(congela o objeto)
object.defineProperties(define verias propriedades)
object.defineProperty(define uma propriedade)

-

""
*/
const Produto = {nome: "caneca", preco: 1.8};

Object.freeze(Produto); // ele nao deixa alterar o produto

// const caneca = Object.assign({}, Produto, {material: "porcelana"});

const outraCoisa = {
    ...Produto,
    material: "porcelana"
};

outraCoisa.nome = "outro nome";
outraCoisa.preco = 2.5;
console.log(Produto);
console.log(outraCoisa);

//console.log(Object.keys(Produto)); -- mostra os elementos de produtos dentro de uma chave


// -----------

const Produto2 = {nome: "produto", preco: 1.4};
Object.defineProperty(Produto2, "nome", {
    writable: false,
    configurable: false,

});
console.log(Object.getOwnPropertyDescriptor(Produto2, "nome"));

console.log(Object.values(Produto2));// igual ao keys mas sem mostra as chaves, apenas os valores das chaves

Produto2.preco = "outra coisa";
delete Produto2.preco;
console.log(Produto2);