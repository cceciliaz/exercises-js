//funcao declarada com jqueri
(function(){
    const sobreNome = "ana";
    function criaNome(nome){
        return nome + " " + sobreNome;
    }
    function falaNome(){
        console.log(criaNome("luiz"));
    }
    falaNome();
})();
const nome = "quaquer coisa";