
export class genericController{

    constructor(private model: any){
        this.listar = this.listar.bind(this)
        this.detalle = this.detalle.bind(this)
        this.insertar = this.insertar.bind(this)
        this.modificar = this.modificar.bind(this)
        this.eliminar = this.eliminar.bind(this)
    }

    async listar(req, res){
        res.json( await this.model.find())
    }

    async detalle(req, res){
        const id = req.params.id
        const user = await this.model.findOne({_id: id})
        res.json(user) 
    }

    async insertar(req, res){
        const body = req.body
        const user = new this.model(body)
        const newUser = await user.save()
        res.json(newUser)
    }

    async modificar(req, res){
        const id = req.params.id
        const body = req.body
        const userUpdated = await this.model.findByIdAndUpdate(id, body, {upsert: true})
        res.json(userUpdated)
    }

    async eliminar(req, res){
        const id =  req.params.id
        const userDeleted = await this.model.findByIdAndRemove(id)
        res.json(userDeleted)
    }
}