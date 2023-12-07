let espaceshipName = prompt("digite o nome da sua nave: ")
let espaceshipVelocity = 0
let chosenOption 

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("oque deseja fazer n ? \n" +
                        "1- acelerar a nave em 5km\n"+
                        "2- desacelerar a nave em 5km\n"+
                        "3- imprimir dados de bordo\n"+
                        "4- sair do programa\n")
    }
    return option
}

function speedUp(velocity){
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity){
    let newVelocity = velocity - 5
    if(newVelocity < 0){
        newVelocity = 0
    }
    return newVelocity
}

function printSpaceshipBoardData(name, velocity){
    alert("Espaçonave: " + name + "\n velocidade: " + velocity + "km/s")
}
do{
    chosenOption = showMenu()
    switch(chosenOption){
        case "1":
            espaceshipVelocity = speedUp(espaceshipVelocity)
            break
        case "2":
            espaceshipVelocity = slowDown(espaceshipVelocity)
            break
        case "3":
            printSpaceshipBoardData(espaceshipName, espaceshipVelocity)
            break
        default:
            alert("encerrando")
    }
}while(chosenOption != "4")