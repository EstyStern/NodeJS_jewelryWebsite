const mongoose = require('mongoose')

const Buy=require('./Buy')

const CustomersSchema = mongoose.Schema({
    Idcustomer: {
        type: Number,
        require,
    },

    customerName: {
        type: Number,
        default: 'John Doe',
    },

    customerPassword: {
        type: String,
        require,
        minlength: '',
        trim: true,//(remove spaces)
        validate: {
            validator: function (v) {
                return /^[0-9]\w{7,14}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone`
        }
    },

    creditNumber: {
        type: String,
        minlength: '16',
        maxlength: '16',
        validator: function (v) {
            return /^[0-9]\w{7,14}$/.test(v);
            
        },
        message: props => `${props.value} is not a valid pass`
    },
    // arrBuy:{
    //     type:Buy
    // }
})

module.exports = mongoose.model('Customers', CustomersSchema,"Customers_tbl")



    
