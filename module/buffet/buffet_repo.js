const buffetModel = require('../../models/buffet_meal');
const branchModel = require('../../models/branches');


exports.addBuffetRepo = async (requestBody) => {
    return buffetModel.create(requestBody)
}

exports.getAllBuffetMealsRepo = async (skip, limit) => {
    return buffetModel.find().skip(skip).limit(limit)
}

exports.getOneBuffetMealsRepo = async (buffetMealId) => {
    return buffetModel.findOne({
        _id: buffetMealId
    })
}

exports.updateBuffetMealRepo = async (buffetMealId, requestBody) => {
    return buffetModel.findByIdAndUpdate({
        _id: buffetMealId
    }, {$set: requestBody}, {new: true})
}

exports.deleteBuffetRepo = async (buffetMealId) => {
    return buffetModel.deleteOne({
        _id: buffetMealId
    })
}

exports.assignBuffetToBranchRepo = async (branch_id, buffet_id) => {
    return branchModel.findByIdAndUpdate({
        _id: branch_id
    }, {"$push": {buffet_meal: buffet_id}}, {new: true})
}
