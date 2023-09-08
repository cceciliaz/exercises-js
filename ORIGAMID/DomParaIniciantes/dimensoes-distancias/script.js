// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria são Read Only no caso nao se pode escrever por cima dela
const section1 = document.querySelector(".animais");
section1.clientHeight; // retorna o height + padding
section1.offsetHeight; // retorna o height + padding + border
section1.scrollHeight; // retorna o height total mesmo dentro de scroll

//

const section2 = document.querySelector(".animais");
section2.offsetTop; // destancia entre o topo do elemento e o topo da pagina

section2.offsetLeft; // distancia entre o canto esquerdo do elemento e o canto esquerdo da pagina



// getBoundingClientRect(): metodo que retorna um objeto com valores de width e height e outros
const rect = section2.getBoundingClientRect();
console.log(rect.height);
rect.height; // height do elemento
rect.width; // width do elemento 
rect.top; // distancia entre o topo do elemento e o scroll



// window metodo para saber medidas que o usuario esta usando
window.innerHeight; // height da janela
window.outerHeight; // soma dev tools tambem

