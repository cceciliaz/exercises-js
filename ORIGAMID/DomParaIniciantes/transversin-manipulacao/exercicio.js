// duplique menu e adiocione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const cloneMenu = menu.cloneNode(true);
contato.appendChild(cloneMenu);



// selecione o primeiro dt da dl de faq
const faq = document.querySelector(".faq");
const primeirofaq = document.querySelector("dt");


// selecione o dd refente ao primeiro dt
const proximodt = primeirofaq.nextElementSibling;
console.log(proximodt);

// subsistitua conteudo 
const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML;