let velocidadeCarro = 15

while(velocidadeCarro > 0){
    alert("o carro esta a " + velocidadeCarro + " km/h")
    velocidadeCarro -= 5
    alert("o carro diminuiu 5 km/h")
    if(velocidadeCarro === 5){
        break
    }
}
alert("o carro parou")