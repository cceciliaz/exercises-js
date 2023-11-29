let pilotoNome = prompt("qual seu nome piloto?")
let velocidade = 0
let novaVelocidade = prompt("a qual velocidade gostaria de acelerar?")
let confimarVelocidade = confirm("estamos acelerando para " + novaVelocidade + " km/s")
if(confimarVelocidade){
    velocidade = novaVelocidade
}

if(velocidade <= 0){
    alert("voce esta parado")
}else if(velocidade < 40){
    alert("voce esta devagar")
}else if(velocidade < 80){
    alert("voce esta em uma boa velocidade")
}else if(velocidade < 100){
    alert("voce esta muito rapido")
}else{
    alert("velocidade perigosa")
}
