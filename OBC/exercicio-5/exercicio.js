let opcao = "5"

do{
    opcao = prompt(
        "Escolha uma das opcoes abaixo:" +
        "\n 1. opcao um" +
        "\n 2. opcao dois" +
        "\n 3. opcao tres" +
        "\n 4. opcao quatro" +
        "\n 5. encerrar"
    )
    switch(opcao){
        case "1":
            alert("escolheu a opcao 1")
            break
        case "2":
            alert("escolheu a opcao 2")
            break
        case "3":
            alert("escolheu a opcao 3")
            break
        case "4":
            alert("escolheu a opcao 4")
            break
        case "5":
            alert("escolheu encerrar")
            alert("encerrando")
            break
        default:
            alert("opcao invalida")
    }
}while(opcao !== "5")