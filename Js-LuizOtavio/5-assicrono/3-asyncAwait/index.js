// ""
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(math.random() * (max - min) - min);
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== "string"){
                reject ("cai no erro");
                return;
            }
            resolve(msg.toUpperCase() + " - passei na promisse");
            return;
        }, tempo);
    });
}


/*

esperaAi("frase 1", rand())
.then(valor => {
    console.log(valor);
    return esperaAi("frase 2", rand());
})
.then(fase => {
    console.log(fase);
    return esperaAi("frase 3", rand());
})
.then(fase => {
    console.log(fase);
    return fase;
})
.then(fase => {
    console.log("terminamos na fase: ", fase);
})
.catch( e => console.log(e));

*/


async function executar(){
    try{
        const fase1 = await esperaAi("fase 1", rand());
        console.log(fase1);
    
        const fase2 = await esperaAi("fase 2", rand());
        console.log(fase2);
    
        const fase3 = await esperaAi("fase 3", rand());
        console.log(fase3);
    
        console.log("terminamos na fase: ", fase3);
    }catch(e){
        console.log(e);
    }
}
executar();