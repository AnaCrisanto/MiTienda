import { Schema, model } from 'mongoose';

const clothingSchema = new Schema({
    barcode: {
        type: String,
        unique: true,
        required: true
    },
    description: String,
    brand: String,
    price: Number,
    cost: Number,
    size: String,
    color: String,
    stock: Number,
    status: Number
}, {
    versionKey: false,
    timestamps: true
});

export default model('clothing', clothingSchema);
