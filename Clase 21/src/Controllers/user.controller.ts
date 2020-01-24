import { genericController } from "./generic.controller"
import { modeloUsuario } from "../Models"
import * as bcrypt from "bcryptjs"
import { Z_DEFAULT_COMPRESSION } from "zlib"
import { crearToken } from "../Services/token.service"

export default class userController extends genericController {
    constructor(){
        super(modeloUsuario)
    }

    //crearemos un metodo para insertar
    async insertar(req, res) {
        //Por defecto tiene una semilla el cual es desde que numero iniciaremos.
        //Si ponemos un numero muy alto sera muy lento y si es muy bajo sera muy vulnerable
        //El valor por defecto es 10. Este metodo es asyncrono.
        const cifradoHash = await bcrypt.genSalt()

        //Obtener la data que ingresa el cliente
        const datos = req.body

        //Ahora debemos crear el hash
        //El primer parametro es lo que queremos cifrar y esta guardada en la base de datos
        //El segundo parametro es el cifrado
        const hash = await bcrypt.hash(datos.password.trim(), cifradoHash)

        //Estamos modificando los datos que ingresa el cliente
        datos.password = hash

        //Se hace una instancia del modelo y se guardan los datos
        const usuario = new modeloUsuario(datos)
        const resultado = await usuario.save()

        //Crearemos el token
        const token = crearToken(resultado._id)
        //Lo enviamos como un JSON
        res.json({token})

    }

    //Tambien es un middleware. Y recibira la informacion que envia el cliente
    async login(req, res){
        const datos = req.body
        //Lo primero que debemos hacer es verificar si el usuario existe
        const usuario: any = await modeloUsuario.findOne({correo: datos.correo.toLoweCase()})

        //Comprobamos si existe el usuario
        if(usuario){
            //Si existe 
            const existe = await bcrypt.compare(datos.password, usuario.password)
            
            if(existe){
                res.send("Usuario logueado")
                //Opcion 2 para autentificar el usuario. Realizarlo en el login
                    //const token = crearToken(usuario._id)
                    //res.json({token})
            }else{
                res.send("Pasword incorrecto")
            }
        }else {
            res.send("Usuario incorrecto")
        }
    }

}