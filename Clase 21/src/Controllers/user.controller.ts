import { genericController } from "./generic.controller"
import { modeloUsuario } from "../Models"


export default class userController extends genericController {
    constructor(){
        super(modeloUsuario)
    }
}