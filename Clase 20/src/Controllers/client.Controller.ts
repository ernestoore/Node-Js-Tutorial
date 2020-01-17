import genericController from "./generic.Controller";
import { clientModel } from '../Models';

//La exportacion se puede colocar tmb cuando se declara la clase.
//Se exporta para que este disponible para otros archivos.
export default class ClientController extends genericController {
    /**
     *
     */
    constructor() {
        super(clientModel);

    }
}