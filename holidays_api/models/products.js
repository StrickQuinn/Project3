const mongoose = require('mongoose');

const productSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    image: { type: String, required: true },
    category:  { type: String, required: true },
    description: { type: String, required: true },
    size: { type: Number, required: true },
    unit: { type: String, required: true},    
    shopPrice: { type: Number, required: true },
    shippingPrice: { type:Number, required: true }
});

const Product = mongoose.model('Product', bakedSchema);

module.exports = Product;