const mongoose = require('mongoose');
const BranchBuffetSchema = new mongoose.Schema(
    {
        branch_id: {
            type: String,
            required: [true, 'please add branch Id'],
        },
        buffet_id: {
            type: String,
            required: [true, 'please add buffet Id'],
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('Branch_Buffet', BranchBuffetSchema);
