// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll("img");
console.log(imgs);

// retorne no console apenas as imagens que comecam com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagem);

// selecione todos os links internos (onde o href comeca com #)
const linksInternos = document.querySelectorAll("[href^='#']");
console.log(linksInternos);

// selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector(".animais-descricao h2");
console.log(primeiroh2);


// selecione o ultimo p do site
const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[--ultimoP.length]);