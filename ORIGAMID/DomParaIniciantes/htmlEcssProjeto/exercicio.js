// Retorne no console todas as imagens do site
const TodasImgs = document.querySelectorAll("img");
console.log(TodasImgs);

// Retorne no console apenas as imagens que começarem com a palavra imagem 
const imagem1 = document.querySelectorAll("img[src^='img/imagem']");
console.log(imagem1);

// Selecione os links internos onde o href começa com #
const linksInternos = document.querySelectorAll("linksInternos[src^='#']");
console.log(linksInternos);

// Selecione o primeiro h2 dentro de animais descriçao
const AnimaisDescricao = document.querySelector(".animais-descricao h2");
console.log(AnimaisDescricao);

// Selecione o ultimo p do site
const paragrafo = document.querySelectorAll("p");
...