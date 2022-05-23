import { timeStamp } from "console";
import mongoose, {Schema, model, Model} from "mongoose";
import { IUser } from '../Interfaces/IUser';


const userSchema = new Schema({
    name: {type: String, required:true},
    email:{type: String, required: true, unique: true},
    password: {type: String, required: true},
    rol: {
        type: String,
        enum:{
            values: ["admin", "client", "other"],
            message: "{VALUE} no es un rol válido",
            required: true,
        }
    },
    active: {type: Boolean, default:true}
},{
    timestamps: true,
})

const User:Model<IUser> = mongoose.models.User || model("User", userSchema);

export default User;