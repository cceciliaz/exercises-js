function slowDown(velocity, printer){
    let deceleration = 20
    while(velocity > 0){
        printer(velocity)
        velocity -= deceleration
    }

    alert("nave para")
}
let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity){
    console.log("velocidade atual " + velocity)
})