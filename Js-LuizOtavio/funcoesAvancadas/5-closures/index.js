function retornaFuncao(){
    return function(){
        return nome;
    };
}
const funcao = retornaFuncao("ana");
const funcao2 = retornaFuncao("luiz");
console.log(funcao);
console.log(funcao2)


console.log(funcao(), funcao2());

// closures é a habilidade da funcao de acessar seu escopo lexio