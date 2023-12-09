let spaceship = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity =+ acceleration
    }
}

function registerSpaceship(){
    spaceship.name = prompt("informe o nome da nave")
    spaceship.type = prompt("informe o nome da nave")
    spaceship.maxVelocity = Number
    (prompt("informe a velocidade maxima da nave"))
}

function acelerate(){
    let acceleration = Number(prompt("quanto vc quer acelerar"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity){
        alert("velocidade maxima ultrapassada")
    }
}