function hello(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log("Hola, "+ name);
            resolve(name);
        }, 1500);
    });
}

function speak(name) {
    return new Promise((resolve,reject) => {
        setTimeout(function () {
            console.log("Estoy hablando")
            // resolve(name);
            reject("Hay un error");
        }, 1500);
    });
    
}

function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Adios, "+ name);
            resolve();
        }, 2000);
    })
}

console.log('Iniciando el proceso..');
hello("Fury")
    .then(bye)
    .then(speak)
    .then(nombre => {
        console.log('Terminando proceso')
    })
    .catch(error => {
        console.error("Ha habido un error warning:")
        console.error(error)
    })