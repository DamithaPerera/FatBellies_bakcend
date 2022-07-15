const mongoose = require('mongoose');
const BranchesSchema = new mongoose.Schema(
    {
        branch_name: {
            type: String,
            required: [true, 'please add branch name'],
            trim: true,
            maxlength: [50, 'name can not be more than 50 characters'],
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
                index: '2dsphere',
                required: false,
            },
        },
        opening_hours: [
            {
                _id: false,
                Monday: {
                    start: String,
                    end: String,
                },
                Tuesday: {
                    start: String,
                    end: String,
                },
                Wednesday: {
                    start: String,
                    end: String,
                },
                Thursday: {
                    start: String,
                    end: String,
                },
                Friday: {
                    start: String,
                    end: String,
                },
                Saturday: {
                    start: String,
                    end: String,
                },
                Sunday: {
                    start: String,
                    end: String,
                }
            }
        ],
        buffet_meal: {
            type: Array
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('Branches', BranchesSchema);
