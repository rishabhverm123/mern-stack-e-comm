const mongoose=require('mongoose');
const Joi = require('joi');
const productSchema=new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
    
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    }
)
function validateProduct(user) {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        category: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),

    })
    return schema.validate(user)
}
module.exports.validate = validateProduct
module.exports=mongoose.model("products",productSchema);