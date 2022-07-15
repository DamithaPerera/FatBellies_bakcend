const {addBranchesRepo} = require('./branches_repo')

exports.addBranchesService = async (requestBody) => {

    requestBody['location.coordinates'] = requestBody.coordinates


    return addBranchesRepo(requestBody)

}
