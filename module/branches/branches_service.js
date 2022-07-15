const {
    addBranchesRepo,
    viewOneBranchRepo,
    viewAllBranchesControllerRepo,
    updateBranchRepo,
    deleteBranchRepo,
    searchBranchRepo
} = require('./branches_repo')

exports.addBranchesService = async (requestBody) => {

    requestBody['location.coordinates'] = requestBody.coordinates
    return addBranchesRepo(requestBody)

}

exports.viewOneBranchService = async (branchId) => {
    return viewOneBranchRepo(branchId)
}

exports.viewAllBranchesControllerService = async (page, limit) => {
    const skip = (page - 1) * limit;
    return viewAllBranchesControllerRepo(skip, Number(limit))
}

exports.updateBranchService = async (branchId, requestBody) => {
    if (requestBody?.coordinates) {
        requestBody['location.coordinates'] = requestBody.coordinates
    }
    return updateBranchRepo(branchId, requestBody)
}

exports.deleteBranchService = async (branchId) => {
    return deleteBranchRepo(branchId)
}

exports.searchBranchService = async (page, limit, name, price) => {
    const skip = (page - 1) * limit;
    return searchBranchRepo(skip, Number(limit), name, price)
}
