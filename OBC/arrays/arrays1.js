const arr = ["frodo", "sam", "merry", "pippin", "gandalf", "pesquisa", "aragorn", "legolas", "gilmli"]
console.log(arr);


// adicionar elementos
// push: serve para inserir elementos no final da array
// unshift: serve para inserir elementos no começo do array

arr.push("boromi")
console.log(arr)

arr.unshift("teste")
console.log(arr)


// remover elementos
// pop: serve para remover o elemento que esta no final do array
// shift: serve para remover o elemento que esta no começo do array

const ultimoelemento = arr.pop()
console.log(arr)
console.log(ultimoelemento)

// vai remover o ultimo elemento e devolver ele 
ultimoprimeiro = arr.shift()
console.log(arr)
console.log(ultimoprimeiro)


// pesquisar elemento
// includes: serve para verificar se um elemento existe no array e devolve true or false
// indexOf: serve para ver o indice do elemento no caso a posicao dele dentro da array

const inclui = arr.includes("pesquisa")
console.log(inclui)

const indice = arr.indexOf("pesquisa")
console.log(indice)


// cortar e concatenar: cortar é basicamente dividir a array
// slice: serve para copiar a a parte do array que selecionou e armazenar ela
const copias = arr.slice(0, 4)
console.log(arr)
console.log(copias)


//concat: serve para concatenar os elementos do array 
const sociedade = copias.concat(ultimoelemento)
console.log(sociedade)

// substituicao dos elementos oou remover eles por nada
// splice: serve para remover um grupo de elementos do array e subistituir por outro grupo 
const elementosRemovidos = sociedade.splice(copias, 2, "substituido", "comida")
console.log(sociedade)
console.log(elementosRemovidos)