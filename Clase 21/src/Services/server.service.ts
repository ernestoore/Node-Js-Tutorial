
import * as http from "http"
import * as express from "express"
import { usuarioRoute, recetaRoute } from "../Routes"

let httpServer: http.Server
let app = express()

const initializeServer = () : Promise<any> =>{
    return new Promise((resolve, reject) => {
        
        httpServer = http.createServer(app)

        app.get("/", (req, res) => {
            res.type("text/html").send("<h1>Welcome to Recetas</h1>")
        })

        app.use("/usuarios", usuarioRoute)
        app.use("/recetas", recetaRoute)

        httpServer
            //.listen(env.PORT)
            .listen(3200)
            .on("listening", () => resolve())
            .on("error", error => reject(error))

    })
}

export default initializeServer