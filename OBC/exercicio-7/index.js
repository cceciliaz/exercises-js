const fila = []
let opcao = ""
// "\"
do{
    let paciente = ""
    for(let i = 0; i < fila.length; i++){
        paciente += (i + 1) + "° - " + fila[i] + "\n"
    }

    opcao = prompt(
        "pacientes:\n" + paciente +
        "\n escolha uma acao:\n1. novo paciente\n2. consultar paciente\n3. sair"
    )
    
    switch(opcao){
        case "1":
            const novoPaciente = prompt("qual o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const consultado = fila.shift()
            alert(consultado + "foi removido")
            break
        case "3":
            alert("encerrando")
            break
        default:
            alert("opcao errada")
    }
}while(opcao !== "3")