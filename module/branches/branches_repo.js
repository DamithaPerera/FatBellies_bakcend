const branches = require('../../models/branches');


exports.addBranchesRepo = async (requestBody) => {
    return branches.create(requestBody)
}

exports.viewOneBranchRepo = async (branchId) => {
    return branches.findOne({
        _id: branchId
    })
}

exports.viewAllBranchesControllerRepo = async (skip, limit) => {
    return branches.find({}).skip(skip).limit(limit)
}

exports.updateBranchRepo = async (branchId, requestBody) => {
    return branches.findByIdAndUpdate({
        _id: branchId
    }, {$set: requestBody}, {new: true});
}

exports.deleteBranchRepo = async (branchId) => {
    return branches.deleteOne({
        _id: branchId
    });
}
