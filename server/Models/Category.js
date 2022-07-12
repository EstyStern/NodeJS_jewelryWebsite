const mongoose = require('mongoose')

const Jewelry = require('./Jewelry')

const CategorySchema = mongoose.Schema({

    idCategory: {
        type: Number,
        require,
    },

    nameCategory: {
        type: String
    },

    // arrJewelry: {
    //     type: Jewelry
    // }
})
// 'Customers', CustomersSchema,"Customers_tbl"
module.exports = mongoose.model('Category',CategorySchema,"Category_tbl")