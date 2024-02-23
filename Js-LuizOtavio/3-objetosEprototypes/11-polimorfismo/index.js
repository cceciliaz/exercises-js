// ""
function conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.Conta = conta;
    this.saldo = saldo
}



Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
conta.prototype.verSaldo = function(){
    console.log(
        "ag/c" + this.agencia + this.conta + "saldo" + this.saldo.toFixed(2);
    );
};
function CC(agencia, conta, saldo, valor, limite){
    conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
CC.prototype = Object.create(conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log("saldo insuficiente" + this.saldo);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
const CC = new CC(11, 22, 0, 100);
CC.depositar(10);
CC.sacar(110);
CC.sacar(1);



CP.prototype = Object.create(conta.prototype);
CP.prototype.constructor = CP;
function CP(agencia, conta, saldo, valor){
    conta.call(this, agencia, conta, saldo);
};
const CP = new CP(11, 22, 0, 100);
CP.depositar(10);
CP.sacar(110);
CP.sacar(1);
// const conta1 = new conta(11, 22, 10);
// conta1.depositar(11);
// conta1.depositar(10);
// conta1.sacar(31);