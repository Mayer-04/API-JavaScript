import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true,
    versionKey: false
});

const productsModel = mongoose.model('products', productsSchema);
export default productsModel;