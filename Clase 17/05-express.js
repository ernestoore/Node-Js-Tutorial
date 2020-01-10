const express = require("express")
const app = express()

//requiero que cuando la peticion sea el metodo get y la ruta sea /usuarios
//se ejecute una funcion de callback

app.get("/usuarios", (req, res) => {
    const users = [
        { username: "user1" },
        { username: "user2" }
    ]

    //primera manera
/*     res
        .status(200)
        //tipo
        .type("application/json")
        .send(JSON.stringify(users)) */


    //segunda manera
    //Si no indico el status, el valor por default es 200
    res
        //existe el metodo json al cual se le envia un json y lo convierte en cadena.
        .json(users)
})

app.listen(3000, () => console.log("server is listening on port 3000"))
