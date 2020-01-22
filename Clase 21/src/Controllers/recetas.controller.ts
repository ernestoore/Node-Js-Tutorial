import { genericController } from "./generic.controller";
import { modeloRecetas } from "../Models";

export default class RecetaController extends genericController{
    constructor(){
        super(modeloRecetas)
    }
}