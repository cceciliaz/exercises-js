// "factory functions"

function criaPesson(nome, sobrenome, a, p){
    return{
        nome, 
        sobrenome,
        fala: function(assunto){
        return '${this.nome} esta ${assunto}.';
        },


        // getter ele esta fingindo ser um atributo simples, vai da apenas o valor
        get nomeCompleto(){
            return '${nome} ${sobrenome}';
        },


        // setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        altura: a,
        peso: p,
        imc(){
            const indece = this.peso / (this.altura ** 2);
            return indece.toFixed(2)
        }
    };
}

const p1 = criaPesson("ana", "silva", 1.8, 50);

p1.nomeCompleto = " ana maria silva";

console.log(p1.imc());


console.log(p1.fala("esta falando sobre js", 1.5, 45));


// console.log(p1.nome);
// é a mesma coisa que chemar o this