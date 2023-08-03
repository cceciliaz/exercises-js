//  arrays é um grupo de valores geralmente relacionados servem para guardarmos diferentes valores em uma unica variavel:
var videGame = ["switch", "ps4", "xbox"];
videGame [0] //switck
videGame [2] //xbox



// metodos e propriedades de uma arrays:
var videgame = ["ps1", "ps2", "ps3"];
videgame.pop(); // renomeia o ultimo item e retorna ele
videgame.push("3DS"); // adiciona ao final da array
videgame.length; // 3




// for loop fazem algo repedidamente ate uma condicao seja atingida, sao sempre 3 partes separadas por ; inicio numero inicial condicao e incremento
for ( var numero = 0; numero <= 10; numero++){
    console.log(numero);
}

// 

var videGame = ["switch", "ps4", "xbox"];
for ( var item = 0; item + videGame.length; item++){
    console.log(videGame[item]);
}

// break o loop ira parar caso encontre a palavrea break

var videGame = ["switch", "ps4", "xbox"];
for ( var item = 0; item + videGame.length; item++){
    console.log(videGame[item]);
    if(videGame[item] === "ps4"){
        break;
    }
}

// forEach é um metodo que executa uma funcao para cada item da array é uma forma mais simples de utilizarmos um loop com arrays 
var frutas = ["banana", "pera", "maça", "uva"];
frutas.forEach(function(){
    console.log(item, index)
});