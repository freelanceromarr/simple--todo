import { Schema } from "mongoose";
import mongoose from "mongoose";


const todoSchema =  Schema({
    name: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
        required: true,
    },
    color: {
        type: String,
    }

})

 export const Todos = mongoose.models.Todos || mongoose.model('Todos',todoSchema);

