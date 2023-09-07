// Da para seleciona um elemento pelo document com o ID dele, não se coloca o # na frente, o id é escrito puro:
const animaisSection = document.getElementById("animais");

// Da para selecionar por tag e class tambem, ele retorna a a lista do elemento, e pela class retorna um htmlcollection, nçao se coloca o . na frente ele é escrito puro, o ponto so vai se for no querySelection:
const gridSection = document.getElementsByClassName("grid-section");

// Da para selecionar todas as uls tambem, tambem se retorna uma htmlcollection:
const ul = document.getElementsByTagName("ul");
// No console vai dar como uma array e nele da para selecionar o item dentro
console.log(gridSection[1]);


// O seletor querySelection ele é ultilizado com o seu seletor CSS, nele se pode colocar o # e o . nas tagas e nos id
const animaiS = document.querySelector(".animais");
const Contatos = document.querySelector("#contatos");

// Esse seletor é especial ele seleciona todo item que tiver href e img
const linkCss = document.querySelector("[href^="img"]");

// No querySelection ele vai selecionar o primeiro item que achar e nele voce tambem pode selecionar um primeiro item dentro dele mesmo com a mesma tag
const navItem = primeiroUl.querySelector("li");
//acima ele selecionou a primeira li dentro do primeiro ul


// O querySelectionAll seleciona todos os elementor, nele tambem se usa o . e o # na frente, ele retorna uma nodelist e não é ao vivo significa que se for adicionado algo depois ele não vai atualizar, nele tambem se pode selecionar um item especifico com as [0]:
const fotoAnimais = document.querySelectorAll(".animais-lista img"); //aqui ele selecionou todas as imagens dentro de todas as sections do site



/*
o metodo forEach[] so existe no nodelist, o forEach faz um loop em cada item para interagir com cada item especificamente, dentro dele sempre precisa passar uma funcao como callback, ele leva alguns argumentos o primeiro é o item e o segundo pode ser o index
*/
const gridSectionNode = document.querySelectorAll(".grid-section");
gridSectionNode.forEach(function(item, index){
    console.log(item/*pode ser o index tambem*/);
});

// Essa é a forma de transforma uma array lite em uma array:
const gridSectionHtml = document.getElementsByClassName("grid-section");
const arrayGrid = array.from(gridSectionHtml); // aqui ele tranfomou em array

//para remover o ultimo item de uma array é so colocar .pop()