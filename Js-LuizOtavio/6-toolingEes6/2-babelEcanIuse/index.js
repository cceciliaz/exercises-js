// "npm install --save-dev @babel/cli @babel/preset-env @babel/core"

const nome = "ana";
const obj = {nome};
const novoObj = {...obj};
console.log(novoObj);
class pessoa {
    constructor(nome){
        this.nome = nome;
    }
}