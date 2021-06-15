const fs = require('fs');

function read(route, callback){
    fs.readFile(route, (err, data) => {
        callback(data.toString())
        //leido
    })
}

function write(route, content, callback){
    fs.writeFile(route,content, function (err) {
        if (err){
            console.log("We can't write this text",err);
        }else {
            console.log("Write sucessful");
        }
        
    } )
}


function borrar(route, callback){
    fs.unlink(route, callback);
}

// borrar(__dirname + "/file.txt", console.log);


// read(__dirname + "/file.txt", console.log)
write(__dirname + "/file2.txt", "New Write file", console.log)