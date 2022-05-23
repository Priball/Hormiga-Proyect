import { Request, Response } from 'express';
import { connectDB, disconnectDB } from '../database/db';
import { IUser } from '../Interfaces/IUser';
import User from '../models/User';
import bycriptjs from 'bcryptjs';
import { isValidToken, signToken } from '../helpers/jwt';
// import User from '../models/User';

type Data = | {message: string}
 | IUser
 | IUser[]
 | {
    token: string;
    user: {
        _id : string,
        email: string;
        name: string,
        rol: string,
    }

}

export const login = async (req: Request, res: Response<Data>)=>{    
   
    const {email, password} = req.body as {email:string, password: string};
    
    await connectDB();
    const user = await User.findOne({email}).lean();
    await disconnectDB();

    if(!user) return res.status(400).json({message: "No User found - Email"});
    
    if(!user?.active)   return res.status(400).json({message: "User Inactive"});


    const validPassword = bycriptjs.compareSync(password, user.password || "");
    if(!validPassword) {
        return res.status(400).json({message: "Password Incorrect"});
    }

    const token = signToken( user._id || "3", email );

    return res.status(200).json({token, user});
}

// Method Register is in userController: PostController


export const checkJWT = async (req: Request, res: Response<Data>)=>{    
    const { authorization = ''} = req.headers as {authorization: string};

    let userId = '';
    try {
        userId = await isValidToken( authorization );
    } catch (error) {
        return res.status(401).json({
            message: 'Token de autorización no es válido'
        })   
    }

    await connectDB();
    const user = await User.findById( userId ).lean();
    await disconnectDB();

    if ( !user ) {
        return res.status(400).json({ message: 'No existe usuario con ese id' })
    }

    const { _id, email, rol, name } = user;

    return res.status(200).json({
        token: signToken( _id, email ),
        user: {
            _id,
            email, 
            rol, 
            name
        }
    })
}