// ""
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    // metodo de instancia
    aumentaVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
    // metodo estatico
    static trocaPilha(){
        console.log("ok, vou trocar");
    }
}

const controle1 = new ControleRemoto("lg");
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
console.log(controle1);

ControleRemoto.trocaPilha();