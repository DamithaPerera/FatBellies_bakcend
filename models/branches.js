const mongoose = require("mongoose");

const BranchesSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: [true, "please add product name "],
            trim: true,
            maxlength: [50, "name can not be more than 50 characters"],
            text: true, //used when use search
        },
        price: {
            type: Number,
            required: true,
            trim: true,
            maxlength: [32, "price can not be more than 32 characters"],
        },
        location: {
            type: {
                type: String,
                enum: ['Point'],
                required: false,
                default: 'Point',
            },
            coordinates: {
                type: [Number],
                required: false,
            },
        },
        opening_hours: [{
            day: {type: Date}, //mon - sun
            periods: [{
                start: {type: Date},
                end: {type: Date}
            }]
        }]
    },
    {timestamps: true}
);

module.exports = mongoose.model('Branches', BranchesSchema);
