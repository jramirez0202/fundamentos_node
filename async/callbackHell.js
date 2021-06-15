function hello(name, myCallback) {
    setTimeout(function () {
        console.log("Hola, "+ name);
        myCallback(name);
    }, 1000);
}

function speak(callbackSpeak) {  
    setTimeout(function () {
        console.log("Estoy hablando")
        callbackSpeak();
    }, 1500);
}
//funcion recursiva reeutiliza las funciones ella misma
function talking(name, times, callback) {
    if (times > 0) {
        speak(function() {
            talking(name, --times, callback);
        })   
    }   else {
            bye(name, callback);
    }
}


function bye(name, otherCallback) {  
    setTimeout(function() {
        console.log("Adios, "+ name);
        otherCallback();
    }, 2000);
}

console.log("Iniciando proceso...");
hello('fury', function(name) {
    talking(name,3,function () {  
        console.log("Proceso Terminando")
    })
})

// hello('Fury', function(name) {
//     speak(function(){
//         speak(function(){
//             bye(name, function() {
//                 console.log("Terminando proceso..");
//             });
//         });
//     });

// });
