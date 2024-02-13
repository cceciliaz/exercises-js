// "dobre os numeros"
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(function(valor){
    return valor * 2;
});
console.log(numerosEmDobro);

// -------

// para cada elemento retorne apenas uma string com o nome da pessoa
// remova apenas as chaves "nome" do objeto
// adicionar uma chave id em cada objeto
const pessoas = [
    {nome: "luiz", idade: 62},
    {nome: "maria", idade: 23},
    {nome: "eduardo", idade: 55},
    {nome: "leticia", idade: 19},
    {nome: "rosana", idade: 32},
    {nome: "wallace", idade: 47}
];
const nomes = pessoas.map(function(obj){
    return obj.nome;
});
const idades = pessoas.map(function(obj){
    // delete obj.nome;
    return {idade: obj.idade};
});
const comIds = pessoas.map(function(obj, indice){
    // obj.id = indice;
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});