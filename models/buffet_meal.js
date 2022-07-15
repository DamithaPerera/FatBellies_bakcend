const mongoose = require('mongoose');
const BuffetSchema = new mongoose.Schema(
    {
        meal_plan_name: {
            type: String,
            required: [true, 'please add meal plan name '],
            trim: true,
            maxlength: [70, 'meal plan name can not be more than 70 characters'],
            text: true,
        },
        maximum_capacity: {
            type: Number,
            required: [true, 'please add maximum capacity'],
        },
        price: {
            type: Number,
            required: [true, 'please add price'],
        },
        day: {
            type: String,
            required: [true, 'please add a day'],
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
        start_time: {
            type: String,
            required: [true, 'please add start time'],
        },
        end_time: {
            type: String,
            required: [true, 'please add end time'],
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('Buffet', BuffetSchema);
