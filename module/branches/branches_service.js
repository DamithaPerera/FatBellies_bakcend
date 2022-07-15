const {addBranchesRepo, viewOneBranchRepo, viewAllBranchesControllerRepo, updateBranchRepo} = require('./branches_repo')

exports.addBranchesService = async (requestBody) => {

    requestBody['location.coordinates'] = requestBody.coordinates
    return addBranchesRepo(requestBody)

}

exports.viewOneBranchService = async (branchId) => {
    return viewOneBranchRepo(branchId)
}

exports.viewAllBranchesControllerService = async () => {
    return viewAllBranchesControllerRepo()
}

exports.updateBranchService = async (branchId, requestBody) => {
    if (requestBody?.coordinates) {
        requestBody['location.coordinates'] = requestBody.coordinates
    }
    return updateBranchRepo(branchId, requestBody)
}
