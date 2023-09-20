const nome = prompt("insira seu nome:");
let cidades = " "
let constagem = 0

let continuar = prompt("voce visitou alhuma cidade ? (sim/nao)")

while (continuar === "sim"){
    let cidade = prompt("qual o nome da cidade que voce visitou ?");

    cidades = cidades + cidade
    constagem++
    continuar = prompt("voce visitou alguma outra cidade ?")
}

alert(" turista " + nome + " numeros de cidades visitadas " + constagem + " cidades visitadas " + cidades)