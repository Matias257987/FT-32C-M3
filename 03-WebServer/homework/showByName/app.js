var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor

http.createServer(function (request, response) {
    if (request.url === '/') {
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.end("Estas en el Home");
    } else {
        fs.readFile(__dirname + `/images${request.url}_doge.jpg`, (err, img) => {
            if (err) {
                response.writeHead(404);
                response.end("Imagen no encontrada");
            } else {
                response.writeHead(200);
                response.end(img);
            }
        })
    }
}).listen(3000, console.log("Server running localhost:3000"))
