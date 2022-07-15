const branches = require('../../models/branches');


exports.addBranchesRepo = async (requestBody) => {
    return branches.create(requestBody)

}
