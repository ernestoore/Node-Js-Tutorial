import * as http from "http"
import * as express from "express"
import route from "./routes/users.route"
import * as bodyParse from "body-parser"
import {serverService, initializeDatabase} from "./Services"


const begin = async ()=>{
    try {
    await serverService()
        console.log("Server is running")
    } catch(error){
        console.log(error)
    }

    try{
        await initializeDatabase()
        console.log("Connected to Mongo")
    }catch (error){
        console.log(error)
    }
    
}

//Iniciar el servidor.
begin()