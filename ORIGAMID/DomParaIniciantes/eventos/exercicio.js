// quando o usuario clicar nos links internos do site adicione a classe ativo ao item clicado e remova dos demais itens caso possua a mesma, previna o comportamento padrao desse link
const linksInternos = document.querySelectorAll("a[href^="#"]");
function handlink(event){
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove("ativo");
    });
    event.this.classList.add("ativo");
}
linksInternos.forEach((link) => {
    link.addEventListener("click", handlink);
})





//
const todosElementos = document.querySelector("body *");
function handElemento(event){
    console.log(event.this);
}
todosElementos.forEach((elemento) => {
    elemento.addEventListener("click", handElemento);
})





//
const todosElementos2 = document.querySelector("body *");
function handElemento(event){
    event.this.remove()
}
todosElementos2.forEach((elemento) => {
    elemento.addEventListener("click", handElemento);
})






//
function handclickT(event){
    console.log(event.key);
    if(event.key === "t"){
        document.documentElement.classList.toggle("textomaior")
    }
}
window.addEventListener("keydown", handclickT);