import * as httpCodes from "http-status-codes"

//Funcion que devuelve la defiinicion de un Middleware
//Utilizamos el operador ... que conviente una secuencia en un arreglo y viceversa
const authorizationPolicy = (...rolesPermitidos) => {
   //devolvera la definicion de un middleware
    return (req, res, next) => {
        const roles = res.locals.roles
        let autorizado = false
        rolesPermitidos.forEach(rol => {
            if(roles.indexOf(rol) >-1) autorizado = true
        })

        if(autorizado) return next()
        else res.status(httpCodes.FORBIDDEN).send("El perfil no tiene autorizacion")
    }
    
}

/* const authorizationPolicy = (req, res, next) => {
    const roles =  res.locals.roles

    //Si encuentras admin entonces pasa al siguente Middleware
    if(roles.indexOf("admin") > -1) return next()
    //Si no lo encuentro entonces lo rechazo
    res.status(httpCodes.FORBIDDEN).send("El perfil no tiene autorizacion")
} */

export default authorizationPolicy