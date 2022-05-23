import { Request, Response } from "express";
import { connectDB, disconnectDB } from "../database/db";
import { initialData } from "../database/seedData";
import Rol from "../models/Rol";
import User from "../models/User";



type Data = | {message: string}

export const seedData = async (_req: Request, res: Response<Data>)=>{
    
     await connectDB();
     try {
        await User.deleteMany();
        await User.insertMany(initialData.users);
      
        await Rol.deleteMany();
        await Rol.insertMany(initialData.rols);
       
        await disconnectDB();
        return res.json({message: "Seed Realizados Correctamente"});
        
     } catch (error) {
         
         console.log(error);
         await disconnectDB();
         return res.json({message: "Algo Salió mal"})
        
     }
     
    

    
}

