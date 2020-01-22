import * as http from "http";
import {initializeServer, initializeDB} from './Services'

const begin = async () => {
    try{
        await initializeServer()
        console.log("Server is running")
    }catch(error){
        console.log(error)
    }

    try{
        await initializeDB()
        console.log("Connected to DB")
    }catch(error){
        console.log(error)
    }
}

begin()