const hitchedSpaceShips = [
    ["fenix", 8, true]
    ["golias", 10, true]
    ["helmet", 5, false]
    ["elemental", 3, true]
    ["darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceShips.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoingHitchPlatForm = hitchedSpaceShips.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlightedSpaceships = hitchedSpaceShips.map(spaceship => {
    return spaceship[0].toUppercase()
})

let message = "espaçonaves: " + crewGreaterThan9.join(", ")
message += "\nPlataform com processo: " + (ongoingHitchPlatForm + 1)
message += "\nEspaçonave destacadas" + hitchedSpaceShips.join(", ")

alert(message)