// declaração de função
// declarando a função assim acontec o function hoisting, significa que se pode chamar a função antes ou depois dela declarada
// first-class objects (objeto de primeira classe). se pode tratar as funções como dados
function falaOi(){
    console.log("oi")
}


// 

//function expression(quado uma funcao é usada dentro de uma variavel)
const souUmDado = function(){
    console.log("sou um dado")
}

function executarFuncao(funcao){
    console.log("vou executar seu codigo a baixo")
    funcao()
}
executarFuncao(souUmDado);


// 


// arrow function
const funcaoArrow = () => {
    console.log("sou uma arrow function")
}


// 


// dentro de um objeto posso ter uma função 
const obj = {
    falar: function(){
        console.log("estou falando")
    }
}
obj.falar()