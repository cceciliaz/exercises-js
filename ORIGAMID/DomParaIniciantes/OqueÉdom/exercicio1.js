// retorne a url da pagina atual do objeto windom
const paginaAtual = window.location.href
console.log(paginaAtual);

// selecionar o primeiro elemento da pagina que possui a pagina ativa... 
const selecionartag = document.querySelector(".ativa");
console.log(selecionartag);
//esse querySelector ele seleciona o primeiro elemento que ele achar com a tag

//retorne a linguagem do navegador
const linguagemAtual = window.navigator.language
console.log(linguagemAtual);

//retorne a aultura da janela
const aulturaJanela = window.innerHeight
console.log(aulturaJanela);