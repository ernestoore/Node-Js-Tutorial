import {userModel} from "../Models"

export class genericController{
    async getAll() {
        //Supongamos que esta ruta se ha conectado a la base de datos y trae una lista de usuarios
        /* return [
            { id: 1, username: "user01" },
            { id: 2, username: "user02" }
        ] */

        //Para utilizar la BD
        //El find es una promesa porque no se sabe cuando se va a ejecutar.
      return await userModel.find()
    }

    async getOne(id){
        //findOne espera un parametro que debe ser un JSON
        const user = await userModel.findOne({_id: id})

        //const user = await userModel.findById(id)
        return user
    }

    async insert(data){
        //Solo se esta instanciando la clase que se va a enviar
        const user = new userModel(data)
        //se debe guardar la informacion y esto no se sabe cuando se va a realizar.
         const newUser =  await user.save()
        return newUser
    }

    async update(id, data){
        //Por defecto el metodo findByIdAndUpdate  trae el registro que se va a actualizar no el actualizado
        //Para lo cual se debe utilizar: {upsert: true}
        const userUpdated = await userModel.findByIdAndUpdate(id, data, {upsert: true})

        return userUpdated
    }

    async delete(id){
        const userDeleted = await userModel.findByIdAndRemove(id)
        return userDeleted
    }
}

export default genericController