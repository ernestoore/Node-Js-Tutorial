import * as moment from "moment"
import * as jwt from "jwt-simple"

//Se va a crear el token y solo se enviara el ID del usuario
const crearToken = (_id: string) => {
    const payload = {
        //Propiedad que dice cuando ha sido creado el Token
        //Quiero que todo este expresado en milisegundos, se utiliza unix.
        iat: moment().unix(),
        //Para definir cuando va a expirar el token
        //Se le agregara la cantidad de tiempo que se requiere.
        exp: moment().add(40, 's').unix(),
        //
        _id
    }

    //Se requiere el payload y la palabra secreta
    //return jwt.encode(payload, env.KEYWORD_SECRET)
    return jwt.encode(payload,"PALABRASECRETA")
}

//Quiero que esta funcion devuelva una promesa
//Utilizaremos promesas xq las librerias de JWT no manejan excepciones.
//Se maneja una excepcion cuando el token es invalido o ha expirado
const validarToken = (token: string) : Promise<any> => {
    return new Promise((resolve, reject) => {   
        try{
            //Recibe dos parametros, el token que queremos validar y la palabra secreta.
            const payload = jwt.decode(token, "PALABRASECRETA")
            resolve(payload)
        }catch(error){
            //Si la promesa no se cumplio
            reject(error)
        }
    })
}


export {crearToken, validarToken}    