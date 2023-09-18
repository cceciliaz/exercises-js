let nome = window.prompt("insira seu nome:");

let sobreNome = window.prompt("insira seu sobrenome:");

let estudo = window.prompt("insira seu curso:");

let anoNascimento = window.prompt("insira o ano do seu nascimento:");

let idade = (2023 - anoNascimento);

let informacoesCompleta = nome + " " + sobreNome + " " + estudo + " " + idade;

// console.log(informacoesCompleta);
window.confirm("confime se suas informações estão corretas: " + informacoesCompleta);