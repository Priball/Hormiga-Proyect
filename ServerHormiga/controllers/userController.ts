import { Request, Response } from "express";
import { connectDB, disconnectDB } from "../database/db";
import User from "../models/User";
import { IUser } from '../Interfaces/IUser';
import bycriptjs from "bcryptjs";
import { isNumber } from '../helpers/db-validators';
import { signToken } from "../helpers/jwt";


type Data = | {message: string} | IUser[] | 
 {
    token: string;
    user: {
        _id : string,
        email: string;
        name: string,
        rol: string,
    }
}
| any;


export const getUsers = async (req: Request, res: Response<Data>)=>{    
    const {limit = "10", skip= "0"} = req.query as {limit: string, skip: string};
    if( !(isNumber(limit) && isNumber(skip))) return res.status(400).json({message: "Limit or Skip Invalidate"});
    
   await connectDB ();
   const users = await User.find({active: true})
                            .skip(Number(skip))
                            .limit(Number(limit))
                            .lean();
    await disconnectDB();
    return res.status(200).json(users);
}


type bodyData= {
    _id?: string
    name: string
    email: string
    password: string
    rol: string
}

export const postUsers = async (req: Request, res: Response<Data>)=>{
    const {name, email, password, rol} = req.body as bodyData;

    await connectDB();
    const user = await User.create({name, email, password, rol});
   
    user.password = bycriptjs.hashSync(password);
    await user.save();
    await disconnectDB();

    const token = signToken( user._id || "0", email);

    return res.status(200).json({user, token});
}


export const updateUser = async (req: Request, res: Response<Data>)=>{
    
    let {name, email, password, rol} = req.body as bodyData;
    const {id} = req.params as {id:string};

    if(password){
        password = bycriptjs.hashSync(password);
    }
     await connectDB();
     const user = await User.findByIdAndUpdate(id, {name, email, password, rol})
     
     await disconnectDB();
    return res.status(200).json({ message: user })
}


export const deleteUser = async (req: Request, res: Response<Data>)=>{
    const {id} = req.params as {id:string};

     await connectDB();
        const deleteUser = await User.findByIdAndUpdate(id, {active: false});
        if(!deleteUser?.active ) {
            return res.status(400).json({message: 'Este usuario ya no está activo'});
        }
     await disconnectDB();

     return res.status(400).json(deleteUser);
}


