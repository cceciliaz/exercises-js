//  agumentos que sustenta todos os agumentos enviados
function funcao(){
    let total = 0;
    for (let agumento of arguments){
        total += argumento;
    }
    console.log(total)
}
funcao(1,2,3,4,5,6,7);


// enviando objeto literal como argumento, e nos parametros fazendo desestruturacao 
function funcao2({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
funcao2({nome:"luiz", sobrenome: "otavio", idade: 20})

// 

//esse ... significa que é o resto, ele vai colocar o operador no seu devido lugar assim como o acumulador mas o resto que sobrar no argumento ele vai jogar parar o nomero que esta com ...
function conta (operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros)
    for(let numero of numeros){
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }
    console.log(acumulador)
}
conta("+". 0, 10, 10, 10)