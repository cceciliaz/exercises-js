const animais = document.getElementById("animais");
console.log(animais);

// Seleciona pela classe, retorna uma htmlcollection
const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

const contato = document.getElementsByClassName("grid-section contato");

// Seleciona todos as ul´s, retorna uma htmlcollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);

/*
querySelector retorna o primeiro elemento que combina com o seu seletor css

const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last");
const linkCss = document.querySelector("[href^="https://"]");
const primeiroUl = document.querySelector("ul");

buscar dentro do ul apenas
const navItem = primeiroUl.querySelector("li");
*/


