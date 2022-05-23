import mongoose, {Schema, model, Model} from "mongoose";

const categorySchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
}, 
{
    timestamps: true,
});

const Category = mongoose.models.Category || model("category", categorySchema);

export default Category;



