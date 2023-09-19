// essa é a sintaxe do if else
const idade = prompt("informe sua idade");

if (idade > 18){
    alert("voce é maior de idade")
}else if (idade > 12){
    alert("voce é menor de idade")
}else if (idade > 4){
    alert("voce é criança")
}else{
    alert("...")
}

// operadores ternarios: forma abreviada de if else

const resultado = (5 === 5) ? "sim é igual" : "nao, nao é igual"