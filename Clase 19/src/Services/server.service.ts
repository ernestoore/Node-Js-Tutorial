//Creacion de un servicio para el servidor.
//La ides es separar el inicio del servidor
//Primer principio de SOLID. Cada archivo debe tener una funcionalidad y
// si es modificado es por una sola razon.
import * as http from "http"
import * as express from "express"
import * as bodyParse from "body-parser"
import {routeUser, routeClients} from "../routes"


let httpServer: http.Server
let app = express()

const initializeServer = () : Promise<any> => {
    return new Promise((resolve, reject) =>{

        httpServer = http.createServer(app)

        //Estoy definiendo una ruta y esta tendra su propia funcion de Callback
        app.get("/", (req, res )=> {
            res.type("text/html").send("<h1>Home alone</h1>")
        })

        //Creacion de un Middleware, se aplicara a la ruta users.
        //Si se obvia el primer parametros sera para todas las rutas.
        //app.use((req, res, next) => {
        //se utilizan 3 parametros: 
        app.use("/users", (req, res, next) => {
            //Middleware de autenticacion

            //Se esta rechazando: No dejara pasar el request.
            //res.status(401).send("User not logged")

            //Si lo dejo pasar utilizo el tercer parametro el cual es una funcion.
            next()
        })

        //para transformar todas las lineas que regresar en un json.
        app.use(bodyParse.json())
        //Se requiere implementar un segundo middleware para especificar cual de 2 algoritmos se utilizara.
        //urlenconded recibe como parametro extended: boolean. Si pones true utiliza un algortimo sino el otro.
        app.use(bodyParse.urlencoded({extended: true}))

        //crear un middleware unicamente para las rutas que empiecen con /users y delegar las rutas
        //Si viene la ruta /users, delegamos route utilizando  user (Middleware).
        app.use("/users", routeUser)
        app.use("/clients", routeClients)

        httpServer
            .listen(3000)
            .on("listening",() => resolve())
            .on("error", error => reject(error))
    })
}

export default initializeServer