import { Schema } from "mongoose";
import mongoose from mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    }, 
    password: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
    },
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);