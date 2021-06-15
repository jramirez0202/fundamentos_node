function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log("Hola, "+ nombre);
        miCallback(nombre);
    }, 1000);
}

function talk(){
    setTimeout(function (){
        console.log("bla bla bla");
    },2000)
    
}

function adios(nombre, otroCallback) {  
    setTimeout(function() {
        console.log("Adios, "+ nombre);
        otroCallback();
    }, 2000);
}
console.log("Iniciando proceso...");

talk();

hola('Johan', function(nombre) {
    adios(nombre, function() {
        console.log("Terminando proceso..");
    });
});
