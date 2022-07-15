const branches = require('../../models/branches');


exports.addBranchesRepo = async (requestBody) => {
    return branches.create(requestBody)
}

exports.viewOneBranchRepo = async (branchId) => {
    return branches.findOne({
        _id: branchId
    })
}

exports.viewAllBranchesControllerRepo = async () => {
    return branches.find({});
}

exports.updateBranchRepo = async (branchId, requestBody) => {
    return branches.findByIdAndUpdate({
        _id: branchId
    }, {$set: requestBody},{ upsert: true, new: true, });
}

exports.deleteBranchRepo = async (branchId) => {
    return branches.deleteOne({
        _id: branchId
    });
}
