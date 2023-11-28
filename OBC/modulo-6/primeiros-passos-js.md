# historia e caracteristicas
- o js nasceu em 1995
- foi criado por Brendan Eich a serviço da netscape
- surgiu para dar mais dinamismo as paginas HTML
    ° apenas html e css deixavam as paginas estaticas
- possui multiplos paradigmas
    ° orientado a objetos
    ° funcional
    ° orientado a eventos
- possui tipagem dinamica e fraca

# evolução
- em 1996 foi normatizado atraves da ECMA internarional
    ° ECMA internacional é especializada em padroes de normativas
- nome oficial da linguagem é ECMAScript
    ° javascript ka era patenteado pela sun ( hoje é oracle)
    ° a linguagem ja era conhecida como javascript e o nome novo nao pegou
- o ECMAScript encontra-se atualmente na versao --
- hoje nao ultilizamos somente no front-end
    ° criado o nodeJS
    ° é uma interpretador capaz de ler codigos JS do lado do servido


--


# tipos primitivos de dados
-  os tipos primitivos sao a base de codigo
- utilizamos para representar algum dado ´bruto´
- com estes tipos que somos capazes de contruir estrutura mais complexas

# tipo de dado: number
- tudo que envolve numero ele esta dentro do tipo de dado number

# tipo de dados: string
- é uma cadeia de caracteres
- ele é reconhecido como texto dentro de aspas duplas ou simples e entre dois apostrofos
- é possivel colocar um numero entre aspas logo ele se tornara uma string (um texto)

# tipos de dados: boolearno
- ele é um dado logico que retona true ou false

# tipos de dados: null
- o null ele significa ´nada´

# tipos de dados: undefined
- serve para o javascript indentifica que é um numero indefinido


--


# operacoes basicas numero
- a primera oprecao basica é a adicao que é representada +
- subtração que que é representada -
- multiplicação que é representada *
- divisao que é representada peça /
- o modo que retorna o resto que é representada pela %

# operacoes com string
- é a concatenação de duas string que é representado por ´texto um´ + ´texto dois´ = textoumtextodois
(ela junta os dois textos, nela precisa dar um espaço entre as strings para fical legivel)

# oprecao para extrair um caracter string
- para extrair um caracter de uma string ex: ´planeta terra´[2] = a (nesse caso ele retornou a pois no js ele começa contar do 0)

# oprecao para retornar o tamanho da string
- ´planeta terra´.length = 13 (ele retornou 13 contando com o espaço)


--


# declarando variaveis
- declaracao de variavel LET: com let da para atribuir um novo valor sobre ela 
- declaracao de variavel CONST: com const nao da para atribuir um novo valor nela, ela so recebe um por variavel
- declaracao de variavel VAR: ??
- pode-se declarar variavel e nao atribuir nenhum valor nela, ela nela se retornar undefined
- nas declaracoes de variavel pode se teronar um valor, no arlert e no console.log nao se retorna nada mas se usar o confirm e o usuario apertar em cancelar o valor que vaii retornar é false e caso o contrario ele retorna true
- no prompt tambem se retorna um valor, no caso ele retorna o valor que o usuario coloca dentro do input uma string ou um number e armazena na variavel que foi declarada, porem se o usuario escolher cancelar o prompt o valor que retornara sera null