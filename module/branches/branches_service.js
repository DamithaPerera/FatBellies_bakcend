const {addBranchesRepo, viewOneBranchRepo, viewAllBranchesControllerRepo} = require('./branches_repo')

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
