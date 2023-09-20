const valorMetros = prompt("Insira um valor em metros: ");
const unidadesDeMedidas = prompt("Para qual unidade de medidas esse valor deve ser convertido ?: \n - milimetro (mm): \n - centimetro (cm): \n - decimetro (dm): \n - decâmetro (dam): \n - hectómetro (hm): \n - quilômetro (km): ");

let x = valorMetros
const milimetro = x * 1000 
const centimetro = x * 100
const decimetro = x * 10
const decametro = x / 10
const hectometro = x / 100
const quilometro = x / 1000


switch(unidadesDeMedidas){
    case "mm":
        alert(milimetro)
        break
    case "cm":
        alert(centimetro)
        break
    case "dm":
        alert(decimetro)
        break
    case "dam":
        alert(decametro)
        break
    case "hm":
        alert(hectometro)
        break
    case "km":
        alert(quilometro)
        break
    default:
        alert("Opção invalida, tente novamente")
}