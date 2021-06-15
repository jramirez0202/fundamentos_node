console.log('Hola mundo')
let i = 0;
setInterval(function () {  
    i++;
    console.log(i);

    if (i === 5) {
        console.log('forzamos error')
        var a = 3 + z;
    };
    
}, 3000);