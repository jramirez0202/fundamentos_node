async function hello(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log("Hola, "+ name);
            resolve(name);
        }, 1500);
    });
}

async function speak(name) {
    return new Promise((resolve,reject) => {
        setTimeout(function () {
            console.log("Estoy hablando")
            resolve(name);
            // reject("Hay un error");
        }, 1500);
    });
    
}

async function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Adios, "+ name);
            resolve();
        }, 2000);
    })
}

async function main() {
    let name = await hello("johan");
    await speak();
    await speak();
    await bye(name);
    console.log("Terminando proceso")
};

console.log("iniciando")
main();
console.log("Terminando proceso")


