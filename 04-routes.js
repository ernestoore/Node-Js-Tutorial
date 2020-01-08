const http = require("http")
const fs = require("fs")


const server = http.createServer((req, res) => {
    const route = req.url.toLowerCase()
    const method = req.method
    //Todas las llamadas que se hacen por la barra de direcciones del navegador son del metodo GET
    //Si se requiere hacer llamadas con otros metodos se debe utilizar clientes como Postman
    console.log("method", method)

    //Podemos tener un switch que lea la ruta
    switch (route) {
        case "/usuario":
            const users = [
                { username: "user1" },
                { username: "user2" }
            ]
            res.writeHead(200, { "content-type": "application/json" })
            res.end(JSON.stringify(users))

            break;
        case "/usuario/detalle":
            const name = "user01"
            const user = `<strong>Name: </strong>${name}`

            res.writeHead(200, { "content-type": "text/html" })
            res.end(user)
            break;

        case "/descargar":
            //No se require la encodificacion porque el PDF ya lo contiene
            const lectorStream = fs.createReadStream("./manual.pdf")
            res.writeHead(200, { "content-type": "application/pdf" })
            //Otra manera mas rapida.
            //El metodo pipe nos ayuda a transformar la data que se muestra en el navegador.
            //Lo que va leyendo se vaya al objeto res. 
            //Cuando se termine de leer el objeto res, cortara la comunicacion.
            lectorStream.pipe(res)
            break;
        default:
            res.writeHead(404, { "content-type": "text/plain" })
            res.end("Route not found")
    }

    //Mostrar la ruta colocada en el navegador

    /*     res.writeHead(200, {"content-type": "text/html"})
        res.end(route) */
})

server.listen(3000)
server.on("listening", () => console.log("server is listening on port 3000"))
server.on("error", error => console.log(error))