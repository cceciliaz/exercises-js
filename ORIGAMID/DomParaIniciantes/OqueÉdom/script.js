const h1Selecionado = document.querySelector("h1");

const titulo = document.querySelector("h1");

// titulo.innerHTML; // retorna o texto;
// titulo.classList; // retorna as classes;
// titulo.id; // retorna o id;
// titulo.addEventListener("click", callback);
// // ativa a funcao callback no click no titulo

h1Selecionado.addEventListener("click", function(){
    console.log("clicou em", h1Selecionado.innerText);
})