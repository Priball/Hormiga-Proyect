import { connectDB, disconnectDB } from "../database/db";
import Rol from "../models/Rol";
import User from "../models/User";

export const isValidRole = async (rol= "")=>{
    await connectDB();
    const existRol = await Rol.findOne({name: rol})
    
    await disconnectDB();
  
   if(!existRol){
       throw new Error(`The rol ${rol} dosent's exist`)
   }
}


export const isNumber = (numeroAsString: string)=>{
    const regex = /^[0-9]*$/;
    return (regex.test(numeroAsString)) ? true : false;
}

export const existEmail = async (email = "")=>{
     await connectDB();
        const userExists = await User.findOne({email}).lean();
        await disconnectDB();

        if(userExists){
            throw new Error("Ya existe un usuario con ese correo");
        }  
}

export const existUserByID = async (id: string)=>{
     await connectDB();
        const userExists = await User.findById(id).lean();
        await disconnectDB();

        if(userExists){
            throw new Error("No existe ese usuario");
        }  
}
