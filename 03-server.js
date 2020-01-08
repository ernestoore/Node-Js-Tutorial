const http = require("http")

//Como parametro tiene un funcion que se ejecuta cuando llega una peticion.
//Tiene dos parametros request y response.
const servidor = http.createServer((req, res)=>{
    console.log("llego una peticion")
    //Se debe realizar un acuerdo.
    //Para responder se debe indicar en que lenguaje se respondera.
    //1er parametro: StatusCode > Indica el estado de la respuesta.
    //>>> Los codigos ya estan preestablecidos: 200, 404, etc.
    //2do parametro: content-type > Formato en que se responde y encodificacion
    res.writeHead(200, {"content-type": "text/plain; charset=utf-8"})

    //La respuesta
    res.write("Aló")
    res.write("Quien eres?")
    
    //Indicar que la comunicacion ha terminado y tambien puede enviar un parametro.
    res.end("Chau")
})

//Servidor escuche el puerto 3000.
//Tiene una funcion de callback

servidor.listen(3000, () => {
    console.log("El servidor ejecutandose en el puerto 3000")
})

//El servidor tiene un metodo On para manejar eventos.
servidor.on("listening", () => console.log("El servidor se esta ejecutando en el puerto 3000"))
servidor.on("error", error => console.log(error))