const mongoose = require('mongoose')

const JewelrySchema = mongoose.Schema({
    
    Idjewelry: {
        type: Number,
        require,
    },

    jewelryName: {
        type: String,
    },

    codeCategory: {
        type: Number
    },

    jewelryPrice: {
        type: Number,
    },

    jewelryImage: {
        type: String
    },

    unitsInStock: {
        type: Number
    },

    material: {
        type: String
    }
})
module.exports = mongoose.model('Jewelry',JewelrySchema,'Jewelry_tbl')