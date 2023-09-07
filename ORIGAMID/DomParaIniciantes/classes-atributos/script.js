//ClassList: Retorna uma lista com as classes do elemento, permitindo adicionar remover e verificar se contem
const menu = document.querySelector(".menu");

menu.className; // retorna uma string
menu.classList; // lista com as classes menu
menu.classList.add(".classeDoCss"); // adiciona uma class se colocar uma virgula pode adicionar quantas classes quiser
menu.classList.remove(".classeDoCss"); // remove a classe
menu.classList.toggle(".ativo"); //se a class tiver ativo ele remove e se nao tiver ativo ele adiciona
menu.classList.contains(".ClasseDoCss"); // retorna true ou false
menu.classList.replace("ativo", "inativo"); // substitui uma classe pela outra no caso a a ativo pela inativo