const nome = "ana";
const sobrenome = "oliveira";
const idade = 30;
const cpf = "123123123";

function soma(x, y){
    return x + y;
}

export { nome, sobrenome, idade, soma };

export class Pessoa {
    constructor(comida, cor){
        this.comida = comida;
        this.cor = cor;
    }
}