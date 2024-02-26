// ""
class DispositivoEletronico(){
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    };
    ligar(){
        if(this.ligado){
            console.log(this.nome + " ja ligado");
            return;
        };
        this.ligado = true;
    };
    desligado(){
        if(!this.ligado){
            console.log(this.nome + " ja desligado");
            return;
        }
        this.ligado = false;
    };
};

const d1 = new DispositivoEletronico("celular");

class Smatphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}


class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
    ligar(){
        console.log("vc alterou o metodo ligar.");
    }
}


// console.log(s1);
const s1 = new Smatphone("samsung", "preto", "galaxy s10");

const t1 = new Tablet("ipad", true);
console.log(t1.ligado)