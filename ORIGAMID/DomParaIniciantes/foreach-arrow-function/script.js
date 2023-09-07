// aqui ele vai da console.log em cada item no caso ele vai mostrar no console cada imagem, o nome item pode ser qualquer nome o que impota é o imgs.forEach que esta dentro de uma variavel, o segundo parametro é o index que a posicao do item na array no caso vai mostrar a numeracao deles, e o ultimo é a propria array se colocar ele no console ele retorna a node list:
const imgs = document.querySelectorAll("img");
imgs.forEach(function(item, index, array){
    console.log(item, index)
});


// os array-like que não possuem o metodo foreach é recomendado tranforma-los em uma array
const tituloArraLike = document.getElementsByClassName("titulo");// primeiro coloca a array-llike em uma variavel
const tituloTranformacao = Array.from(tituloArraLike); // depois coloca a variavel da array-like dentro de uma variavel com o argumento de Array.from
tituloTranformacao.forEach(function(item){
    console.log(item);
}); // e ja pode usar o metodo foreach nela 



// Arrow function é uma sentaxe curta em felacao a funcao, basta remover a palavra function e adicionar a "fat arrow" => apos o regumento
const Imgs = document.querySelectorAll("img");
Imgs.forEach((item) => {
    console.log(item);
});