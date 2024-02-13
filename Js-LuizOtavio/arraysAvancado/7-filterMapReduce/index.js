// ""
// retorne a soma do dobro de todos os pares
// filtrar os pares
// dobrar os valores
// reduzir(somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor * 2;
}).reduce(function(ac, valor){
    return ac + valor;
});


//  [50, 80, 2, 8, 22] pares
//  [100, 160, 2, 6, 44] dobro
//  324 soma