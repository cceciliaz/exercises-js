//addEventlistebet uma funcao ao elemento é chamada de callback e ela é ativada assim que certo evento ocorrer neste elemento "

const img = document.querySelector("img");
//evento.addEventListener(event, callback funcao no caso, opicional)
img.addEventListener("click", function() {
    console.log("clicou");
});

// boa pratica separar a funcao de callback do addEventListeber ou seja declarar uma funcao ao inves de passar diretamente uma funcao anonima
const img = document.querySelector("img");
// declarando a funcao
function.callback() {
    console.log("clicou");
}

// o click é o valor do evento e o callback é a funcao
img.addEventListener("click", callback);



// Event: o primeiro parametro do callback é refente ao evento que ocorreu
const img = document.querySelector("img");
function callback(event) {
    console.log(event);
}
img.addEventListener("click", callback);

//propriedades do event
const animaisLista = document.querySelector(".animais-lista");
function executarCallBack(e){
    const currentTarget = e.currentTarget; // onde clicou nao especificamente se clicar em uma imagem e ela estiver dentro de uma lista vai retornar que clicou na lista onde a imagem ta e nao nela especificamente
    const target = e.target; // onde o click ocorreu especificamente
    const type = e.type; // tipo de evento no caso uma string se o tipo de evento foi o click que foi usado ele vai retornar isso
    const path = e.path; // 
    console.log(currentTarget, target, type, path);
}
animaisLista.addEventListener("click", executarCallBack);



//event.preventDefault(): previne o comportamento padrao do evento no browser, exemplo de um link externo ira previnir que o link seja ativado no caso que ele funcione 
const linkExterno = document.querySelector("a[href^="http"]");
function clickNoLink(e){
    e.preventDeFault();
    console.log(e.currentTarget);
}
linkExterno.addEventListener("click", clickNoLink);


// Diferentes Eventos: existem diversos eventos
const h1 = document.querySelector("h1");
function callback(e){
    console.log(e, type, e);
}
h1.addEventListener("click", callback);
h1.addEventListener("mouseenter", callback); // se passar o mouse por cima ele vai ser ativado
window.addEventListener("scroll", callback); // se der o scroll na pagina ele vai ser ativado 
window.addEventListener("resize", callback); // qunado meche na janela ele vai ser ativado
window.addEventListener("keydown", callback); // se apertar em alguma tecla ele vai ser ativado e a tecla que voce clicou sera mostrada tambem



//
function ativarAzul(event){
    if(event.key === "a"){
        document.body.classList.toggle("azul");
    }
}
window.addEventListeber("keydown", ativarAzul)




// forEach e eventos: o metodo addEventListener é adicionado a um unico elemento entao é necessario um loop entre elementos de uma lista para adicionarmos a cada um deles