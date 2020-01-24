import * as httpCodes from "http-status-codes"
import { validarToken } from "../src/Services/token.service"

//Se creara un middleware de auteticacion
//Los middleware tiene por lo menos 3 parametros

const authenticationPolicy  = (req, res, next) => {
    //Si no tiene el token en la cabecera lo rechazara
    //Si si lo tiene entonces pasara.
    //El token viaja en la cabecera >> Authentication: BEARER <<TOKEN>>
    const headers =  req. headers
    
    //Validamos si recibe la cabecera autorization
    if(headers.authorization){
        //Validamos que tenga el formato: BEARER <TOKEN>
        //Separamos los elementos con un espacio
        const partesAutorizacion = headers.authorization.split(" ")
        if(partesAutorizacion.length == 2){
        //Creamos un metodo 
            validarToken(partesAutorizacion[1])
            //Como devuelve una promesa podemos utilizar
            //Cuando la promesa se cumple:
                .then(payload => 
                    {
                        //Modificando una propiedad que existe en el objeto res
                        //locals es un json y se esta creando una propiedad llamada roles 
                        //Se le esta enviando el valor de roles dentro del payload
                        res.locals.roles = payload.roles    
                        next()
                    }
                    )
            //Cuando no se cumple la promesa:
                .catch(error => {
                    res.status(httpCodes.UNAUTHORIZED).send("Usuario no autorizado")
                })
        }else{
            res.status(httpCodes.UNAUTHORIZED).send("Usuario no autorizado")
        }
    }else {
        //Indicar el front que el usuario no esta loggueado
        res.status(httpCodes.UNAUTHORIZED).send("Usuario no autorizado")
    }
}

export default  authenticationPolicy