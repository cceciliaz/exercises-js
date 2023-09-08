// verifique a distancia da primeira imagem em relacao ao topo da pagina
const img = document.querySelector("img");
const imgtop = img.offsetTop;
console.log(imgtop);

// retorne a soma da largura de todas as imagens 
function somaImagem(){
    const imagens = document.querySelectorAll("img");
    let soma = 0;
    imagens.forEach((imagem) => {
        soma += imagem.offsetWidth;
    });
    console.log(soma);
}
window.onload = function (){
    somaImagem();
}

//

const links = document.querySelectorAll("a");
links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = linkHeight;
    if(linkWidth > 48 && linkHeight > 48){
        console.log(link, " possui acessibilidade ")
    }else {
        console.log(link, "nao possui acessibilidade")
    }
});




//


const browserSmall = window.matchMedia("(max-width: 7020px)").matches;
if(browserSmall){
    const menu = document.querySelector(".menu");
    menu.classList.add("menu-mobile");
}