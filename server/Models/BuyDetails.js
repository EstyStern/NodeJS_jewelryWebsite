const mongoose = require('mongoose')

const BuyDetailsSchema = mongoose.Schema({
    idBuyDetails: {
        type: Number,
        require,
    },

    idBuy: {
        type: Number,
    },

    jewelryId: {
        type: Number,
    },

    qty: {
        type: Number,
    },
    
})

module.exports = mongoose.model("BuyDetails",BuyDetailsSchema,"BuyDetails")
