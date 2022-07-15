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
