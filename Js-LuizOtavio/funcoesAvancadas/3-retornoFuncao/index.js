// return
// retorna um valor
// termina a função quando coloca return
function soma(a, b){
    return a + b;
}
console.log(soma(2, 5));


// 


document.addEventListener("click", function(){
    document.body.backgroundColor = "red";
})

// 

function falarFrase(comeco){
    function falarResto(resto){
        return comeco + " " + resto;
    }
    return falarResto;
}

const fala = falarFrase("ola");
const resto = fala("mundo");
console.log(resto);


// 


function duplica(n){
    return n * 2;
}
function triplica(n){
    return n * 3;
}
function quadriplica(n){
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// 

function criarMultiplicador (multiplicador){
    return function (n){
        return n * multiplicador;
    };
}

const duplica1 = criarMultiplicador(2);
const triplica1 = criarMultiplicador(3);
const quadriplica1 = criarMultiplicador(4);

console.log(duplica1(2));
console.log(triplica1(2));
console.log(quadriplica1(2));