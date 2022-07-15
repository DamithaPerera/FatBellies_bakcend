const mongoose = require("mongoose");

const BranchesSchema = new mongoose.Schema(
    {
        branch_name: {
            type: String,
            required: [true, "please add branch name "],
            trim: true,
            maxlength: [50, "name can not be more than 50 characters"],
            text: true, //used when use search
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
