function rand(min = 1000, max = 3000){
    const num = math.random() * (max - min) + min;
    return math.floor(num);
}


function f1(callback){
    setTimeout(function(){
        console.log("f1");
        if (callback) callback();
    }, rand());
}


function f2(callback){
    setTimeout(function(){
        console.log("f2");
        if (callback) callback();
    }, rand());
}

function f3(callback){
    setTimeout(function(){
        console.log("f3");
        if (callback) callback();
    }, rand());
}


/*
f1(function(){
    f2(function(){
        f3(function(){
            console.log("ola mundo");
        });
    });
});
*/ 
// criando corrente, inferno do callback
// simplificando o codigo de cima

f1(f1Callback);
function f1Callback(){
    f2(f2callback);
}
function f2callback(){
    f3(f3callback);
}
function f3callback(){
        if (callback) callback();
        console.log("ola")
}