# comparações de dados
- para verificar se um dado é igual a outro se usa ´ === ´
- para verificar se um dado diferente se usa ´ !== ´
- para verificar se um dado é maior que outro se usa ´ > ´
- para verificar se um dado é maior ou igual se usa ´ >= ´
- para verificar se um dado é menor que outro se usa ´ < ´
- para verificar se um dado é menor ou igual a outro se usa ´ <= ´


----


# operações lógicas
- oque sao operadores logicos?
    ° são expressoes construidas a partir de operacoes com valores booleano
    ° tambem retornam valores booleano
    ° seguimos os resultados logicos da tabelo verdade

# tabelo verdade
- é como uma tabuada
    ° é uma tabela de resultados
    ° a tabuada mostra o resultado das multiplicacoes de diversos numeros 
    ° os valores booleanos tem a tabela verdade
    ° mostra o resultado de diversas operacoes logicas
- diferente da tabuada, os valores logicos sao apenas dois (true, false)
- as operacoes basicas que temos na programacao hoje sao 3
    ° E (and)
    ° OU (or)
    ° NAO (not)
- a tabela verdade é o resultado da combinacao dos dois valores booleanos em todas a combinacao possiveis


----


# expressões lógicas
- numa expressao logica podemos ter um ou mais operadores logicos
- cada termo é um valor booleano ou operacao que retorna um booleano

# condicionais 
- sao blocos de codigos que sao executados baseado no resultado de uma expressao logica
- tabembem sao chamados de controle de fluxo ( podemos direcionar a aplicacao por um determinado fluxo com base no valor das expressoes)

# funcionalidae do IF
let velocidade = 90
<!-- o if vai testar se a velocidade é menor que 100 se true ele passa e o codigo dentro é execultado -->
if(velocidade < 100){
    console.log(´estamos numa velocidade aceitavel´)
}

# funcionalidade do else
- ele é chamado se o valor logico do if for false dai ele passa sem execultar oque esta dentro do if e entra no else
let velocidade2 = 110
if(velocidade2 < 100){
    console.log(´velocidade é menor ´)
}else{
    console.log(´velocidade nao é menor´)
}
<!-- o else ele é um bloco opcional porem o else nao existe sem o if -->

# operador ternario
- ele é chamado de if de uma linha é mais usado quando o codigo for pequeno
(velocidade3 > 100) ? console.log(´velocidade maior que 100´) : console.log(´velocidade manor que 100´)
<!-- antes do ? ele testa se é true e dopois do : ele testa se é false -->


----


# conhecendo o switch
- estrutura de controle de fluxo
- avalia uma expressao
- procura a melhor clausula (caso) que entende ao resultado 
    ° os casos dentro do switch sao chamados de "cases"

let velocidade = 80 
switch(velocidade * 2){
    case 100:
        console.log("velocidade 100km")
        break
    case 160:
        console.log("velocidade 160km")
        break
    default:
        console.log("velocidade nao identificada")
}
<!-- esta é a estrutura do switch -->