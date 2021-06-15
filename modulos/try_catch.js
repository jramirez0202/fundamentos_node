function seRompe(){
    return 3 + algo;
}

function otraFuncion(){
    seRompe();
}

function seRompeAsincrona(cb){
    setTimeout(function() {
        try {
            return 3 + algo;
        } catch (err) {
            console.error('Error en mi funcion asíncrona');
            cb(err);
        }
        
    })
}

try {
    seRompeAsincrona(function(err) {
        console.log(err.message)
    });
    // otraFuncion();
    // seRompe();
} catch(err) {
    console.error("resvisa, algo se ha roto...");
    console.log(err);
    console.error("El error ha sido capturado...");
}

