function dobro(x){
    alert("o dobro de " + x + " é " + (x * 2))
}
// dobro(2) 
// dobro(4)
// dobro()


function dizerOla (nome = "valor padrao"){
    alert("ola, " + nome)
}
// dizerOla("cecilia")
// dizerOla()


function soma (a, b, c, d){
    alert("o valor da soma é " + (a + b + c + d))
}
// soma(1, 2, 3, 4)


function criarUsuario(nome, email, senha, tipo = "admin"){
    const usuario ={
        nome, // é a mesma coisa que nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}
// criarUsuario("cecilia", "cecilia@gmail", "123")


function muitosParametros(nome, email, idade, anivesario, senha, tipo){
    // c...
}
// muitosParametros("nome", "cecilia@gmail")


function objetoComoParametro(usuario1){
    usuario1.nome
    usuario1.email
    usuario1.senha
    // c...
}
const dadosDoUsuario = {
    nome: "cecilia",
    email: "cecilia@gmail"
    // c...
}
objetoComoParametro(dadosDoUsuario)