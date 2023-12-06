let warpCount = 0
let chosenOption = ""
let spaceship = prompt("digite o nome da nave")
chosenOption = prompt("deseja entrar em dobra spacial? 1-sim / 2-não")

while(chosenOption === "1"){
    warpCount += 1
    chosenOption = prompt("deseja realizar a proxima dobra ? 1-sim / 2-não")
}

alert("nave: " + spaceship + " quantidade de dobras: " + warpCount)