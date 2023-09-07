// mostre no console cada paragrafo do site
const Paragrafos = document.querySelectorAll("p");
Paragrafos.forEach((item) => {
    console.log(item);
});

// mostre os textos dos paragrafos no console
const textoP = document.querySelectorAll("p");
textoP.forEach((item) => {
console.log(item.innerText);
});

// corrigir o erro abaixo:
const imgs = document.querySelectorAll("img");
imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(()=>{
    console.log(i++)
});

imgs.forEach(() => i++);