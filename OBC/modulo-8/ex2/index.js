let spaceship = prompt("digite o nome da nave")
let charToReplace = prompt("qual caracter voce deseja substituir")
let replacementchar = prompt("por qual caracter deseja substituir")
let newspaceship = ""

for(let pos = 0; pos < spaceship.length; pos++){
    if(spaceship[pos] === charToReplace){
        newspaceship += replacementchar
    }else{
        newspaceship += spaceship[pos]
    }
}

alert("o novo nome da nav é " + newspaceship)