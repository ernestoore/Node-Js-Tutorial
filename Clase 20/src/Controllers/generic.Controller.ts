import { userModel } from "../Models"

export class genericController {

    //Para que pueda ser utilizado por varios constructores y se convierta en generico
    constructor(private model: any) {
        //Colocandolo en el constructor se vincula la definicion de la funcion con el model
        this.getAll = this.getAll.bind(this)
        this.getOne = this.getOne.bind(this)
        this.insert = this.insert.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    async getAll(req, res) {
        return await this.model.find()
    }

    async getOne(req, res) {

        const id = req.params.id
        const user = await this.model.findOne({ _id: id })
        return user
    }

    async insert(req, res) {

        const body = req.body
        //Solo se esta instanciando la clase que se va a enviar
        const user = new this.model(body)
        //se debe guardar la informacion y esto no se sabe cuando se va a realizar.
        const newUser = await user.save()
        return newUser
    }

    async update(req, res) {
        const id = req.params.id
        const body = req.body

        //Por defecto el metodo findByIdAndUpdate  trae el registro que se va a actualizar no el actualizado
        //Para lo cual se debe utilizar: {upsert: true}
        const userUpdated = await this.model.findByIdAndUpdate(id, body, { upsert: true })

        return userUpdated
    }

    async delete(req, res) {
        const id = req.params.id
        const userDeleted = await this.model.findByIdAndRemove(id)
        return userDeleted
    }
}

export default genericController