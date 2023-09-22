let saldo = prompt("indorme a quantidade inicial")
saldo = parseFloat(saldo)
let opcao = ""

do{
    opcao = prompt(
        "saldo disponivel: R$ " + saldo +
        "\n 1. adicionar" +
        "\n 2. remover" +
        "\n 3. sair" 
    )
    switch(opcao){
        case "1":
            saldo += parseFloat (prompt("informe o valor a ser adicionado"))
            break
        case "2":
            saldo -= prompt("informe o valor a ser removido")
            break
        case "3":
            alert("saindo...")
            break
        default:
            alert("opcao invalida")
    }
}while(opcao !== "3")