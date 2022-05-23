import { timeStamp } from "console";
import mongoose, {Schema, model, Model} from "mongoose";
import { SeedRol } from "../database/seedData";



const rolSchema = new Schema({
    name: {type: String, required:true},
},{
    timestamps: true,
})

const Rol:Model<SeedRol> = mongoose.models.Rol || model("Rol", rolSchema);

export default Rol;