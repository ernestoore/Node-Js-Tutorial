import * as http from "http"
import { Resolver } from "dns"


//Lo primero es ener una variable donde almacenar el servidor
let httpServer: http.Server
//Debemos manejar excepciones.
//Funcion que devuelve una promesa
//Si la promesa se cumple, el puerto se levanto correctamente, sino no se levanto.
const initializeServer = () : Promise<any> => {
    //los parametros de la promesa son funciones que se deben ejecutar si se cumple o no.
    return new Promise((resolve, reject) =>{
        //El metodo createServer tiene como parametro una funcion de callback
        //esta funcion tiene dos parametros que son a su vez objetos.
        httpServer = http.createServer((req, res) => {
            res.writeHead(200, {"content-type": "text/html"})
            //necesito empezar a mandar un mensaje
            res.write("<h1> Hola Mundo </h1>")
            res.end()
        })

        /*
        //Escuchar el puerto 3000
        httpServer.listen(3000)

        //Ejecutar el metodo resolve()
        httpServer.on("listening", () => resolve())
        //Si por alguna razon no se puede levantar se ejecuta el metodo reject
        httpServer.on("listening", error => reject(error))
        */

        //Lo de arriba se pudo haber simplificado encadenando los metodos.
        httpServer
            .listen(3000)
            .on("listening",() => resolve())
            .on("error", error => reject(error))
    })
}

//El asyn siempre va asignado a una funcion
//Podemos utilizar un try - catch para manejar las excepciones.
const begin = async ()=>{
    try {
    //Cuando el servidor responde bien: 
    //Como me devuelve una promesa puedo utilizar .then y esto puede ser reemplazado por async - await
    //initializeServer().then(() => {})
    //initializeServer().catch(() => {})

    //Await conviente  la programacion asyncrona en algo que parece programacion syncrona.
    await initializeServer()
        console.log("Server is running")
    } catch(error){
        console.log(error)
    }
    
}

//Iniciar el servidor.
begin()

