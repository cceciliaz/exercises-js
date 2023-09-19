const atacante = prompt("qual é o nome do personagem atacante ?: ");
const poderDeAtaque = prompt("qual é o seu poder de ataque ?:");

const defensor = prompt("qual é o nome do personagem defensor ?: ");
let pontosDeVida = prompt("quantos pontos de vidad ele possui ?: ");
const poderDeDefesa = prompt("qual é o seu poder de defesa ?: ");
const possuiEscudo = prompt("ele possui escudo (sim/nao)");

let danosCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "não"){
    danosCausado = poderDeAtaque - poderDeDefesa
}else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim"){
    danosCausado = (poderDeAtaque -  poderDeDefesa) / 2
}


pontosDeVida -= danosCausado

// "\n"
alert( atacante + " causou " + danosCausado + " poder de danos em " + defensor );

alert( atacante + "\npoder de ataque: " + poderDeAtaque + "\n  " + "\n  " + defensor + "\npontos de viada:" + pontosDeVida + "\npoder de defesa: " + poderDeDefesa + "\npossui escudo: " + possuiEscudo );