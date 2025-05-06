import mongoose from "mongoose";

const schema = new mongoose.Schema({
    "originalUrl": {
        type: String,
        required: true,
        unique: true
    },
    "shortCode": {
        type: String,
        required: true,
        unique: true
    },
    "expiresAt": {
        type: Date,
        default: () => new Date(Date.now() + 300 * 1000),
        expires: 300
    }
})

export const Url = mongoose.model('Url', schema)