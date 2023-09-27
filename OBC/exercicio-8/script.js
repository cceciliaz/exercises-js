const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "bem vindo ao cadastro: \n" +
        "total de imoveis: " + imoveis.length +
        "\n\nEscolha uma opcao: \n1. novo imovel \n2.lista de imoveis \n3. sair"
    )
    switch(opcao){
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("informe o nome do proprietario")
            imovel.quartos = prompt("informe a quantidades de quartos")
            imovel.banheiros = prompt("quantos banheiros sao")
            imovel.garagem = prompt("o imovel tem garagem? (sim/nao)")

            const confirmacao = confirm(
                "salvar esse imovel ? \n" +
                "\nproprietario" + imovel.proprietario +
                "\nquartos: " + imovel.quartos +
                "\nbanheiros: " + imovel.banheiros +
                "possui garagem ? (sim/nao)" + imovel.garagem
            )
            if(confirmacao){
                imoveis.push(imovel)
            }
            break
        case "2":
            for(let i =0; i < imoveis.length; i++){
                alert(
                    "imovel " + (i + 1) +
                    "\nproprietario: " + imoveis[i].proprietario +
                    "\nquartos: " + imoveis[i].quartos +
                    "\nbanheiros: " + imoveis[i].banheiros +
                    "\npossui garagem ?" + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("encerrando..\n")
            break
        default:
            alert("opcao invalida")
    }
} while(opcao !== "3")