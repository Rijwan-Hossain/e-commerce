const mongoose = require('mongoose'); 
const { ObjectId } = mongoose.Schema 

const productSchema = new mongoose.Schema({ 
    name: { 
        type: String, 
        trim: true, 
        required: true, 
        maxlength: 32 
    }, 
    description: { 
        type: String,
        required: true,
        maxlength: 5000
    },
    price: { 
        type: Number,
        trim: true,
        required: true 
    },
    category: { 
        type: ObjectId, 
        ref: 'Category', 
        required: true 
    }, 
    stock: { 
        type: Number, 
        default: 1 
    }, 
    photo: { 
        type: String, 
        required: true 
    } 
}, { timestamps: true })


const Product = mongoose.model("Product", productSchema); 
module.exports = Product; 
