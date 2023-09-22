const palavra = prompt("informe uma palavra")
let palavraV = ""

for( let i = palavra.length - 1; 1 >= 0; i--){
    palavraV + palavra[i]
}
if(palavra === palavraV){
    alert(palavra + " é palindromo")
}else{
    alert(palavra + "nao é palindromo" + palavra + "!==" palavraV)
}