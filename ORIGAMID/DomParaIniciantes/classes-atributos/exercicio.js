// Adicione a classe ativo a todos os itens do menu
const itemMenu = document.querySelectorAll(".menu a");
itemMenu.forEach((item) => {
    item.classList.add("ativo")
});

// remova a classe ativo de todos os itens do menu e mantenha apenas o primeiro
menu a");
itemMenu.forEach((item) => {
    item.classList.remove("ativo")
});
itemMenu[0].classList.add("ativo");

// verifique se as imagens tem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute("alt");
    console.log(img, possuiAtributo);
});

// modifique o href do link externo do menu
const link = document.querySelector("a[hfer^="http"]");
link.setAttribute("href", "https:");