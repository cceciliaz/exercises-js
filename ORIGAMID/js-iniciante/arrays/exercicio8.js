// crie uma array com os anos que o brasil foi campeao da copa
var anos = [1958, 1962, 1970, 1994, 2002];

// interaja com a arrays ultilizando um loop para mostrar no console a seguinte mensagem, "o brasil ganhou a copa de "
for (var i = 0; i < anos.length; i++){
    console.log("o brasil ganhou a copa de " + anos [i]);
}

// interaja com o loop das frutas a baixo e pare ao chegar em pera
var frutas = ["banana", "maça", "pera", "uva", "melancia"];
for (var fruta = 0; fruta + frutas.length; fruta++){
    console.log(frutas[fruta]);
    if(frutas[fruta] === "pera"){
        break;
    }
}

// coloque a ultima fruta da array acima em uma variavel
var ultimaFruta = frutas[frutas.length - 1];