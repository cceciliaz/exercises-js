//Transversing: como navegar pelo dom ultilizando suas propriedades e metodos
const lista = document.querySelector(".animais-lista");
lista.parentElement; // retorna o pai
lista.parentElement.parentElement; // retorna o pai do pai ex retorna um ul de uma li
lista.previousElementSibling; // ele retorna o elemento acima ex se tiver uma div em cima de uma section ele retorna a div
lista.nextElementSibling; // retorna o elemento abaixo


lista.children; // htmlcollection com os filhos, ex se tiver uma lista ele retorna os li



// elemente vc node: element representam um elemento html ou seja uma tag, o node representa um nó e pode ser um elemento, texto comentario quebra de linha e mais 
const lista = document.querySelector(".animais-lista");
lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child




//Manipulando Elementos: é possivel mover elementos no dom com metodos de node.
const lista = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".contato");

contato.appendChild(lista) // move lista para o final de contato
contato.insertBefore(lista, titulo); // insete a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista, titulo); // substitui titulo por lista



//Novos elementos: podemos criar novos elementos com metodo createElement()
const animais = document.querySelector(".animais");
const novoh1 = document.querySelector("hq");
novoh1.innerHTML = "novo titulo";
novoh1.classList.add(".novaClass");




// Clonar Elemento: todo elemento selecionado é unico para criarmos um novo elemento baseado no anterior é necessario ultilizar o metodo cloneNode()
const titulo = document.querySelector("h1");
const titulo2 = document.querySelector("h1");
const novotitulo = titulo;
//todos acima sao iguais

const cloneTitulo = titulo.cloneNode(true); // true significa que vai clonar os filhos tambem no caso o elemento completo
contato.appendChild(cloneTitulo);
const contato = document.querySelector(".contato");