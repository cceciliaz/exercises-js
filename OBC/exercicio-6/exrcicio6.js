const numero = prompt("insira um numero: ")

let resultado = ""

for(let fator = 1; fator <= 20; fator++){
    resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) 
}
alert("resultado " + numero + resultado)