class Spaceship{
    constructor(name, creQuantity){
        this.name = name
        this.creQuantity = creQuantity
        this.isHitched = false
        this.entraceDoorsOpen = false
    }

    hitch(){
        this.isHitched = true
        this.entraceDoorsOpen = true
    }
}

function showMenu(){
    let chosenOption
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3"){
        chosenOption = prompt(
            "oque voce deseja fazer?\n" +
            "1- imprimir naves\n" +
            "2- imprimir nave\n" +
            "3- sair do programa"
        )
    }
    return chosenOption
}

function createSpaceship(){
    let spaceshipName = prompt("informe o nome da nave")
    let crewQuantity = prompt("informe a quantidade de tripulante")
    let spaceShip = new Spaceship(spaceshipName, crewQuantity)
    return spaceShip
}

function printSpaceshipList(spaceships){
    let spaceshipList = " "
    spaceships.forEach((spaceships, index) => {
        spaceshipList +=
    })
}

// erro


let hitchedSpaceships = []
let chosenOption

while(chosen != "3"){
    chosenOption = showMenu()
    switch(chosenOption){
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}
