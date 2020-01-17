import genericController from "./generic.Controller";
import { userModel } from '../Models';

//La exportacion se puede colocar tmb cuando se declara la clase.
//Se exporta para que este disponible para otros archivos.
export default class UserController extends genericController {
    /**
     *
     */
    constructor() {
        super(userModel);

    }

    detailMetaData(req, res) {
        res.json({ dateOfBirth: new Date() })
    }
}