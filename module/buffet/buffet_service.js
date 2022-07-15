const {addBuffetRepo, getAllBuffetMealsRepo} = require('./buffet_repo');


exports.addBuffetService = async (requestBody) => {
    return addBuffetRepo(requestBody)

}

exports.getAllBuffetMealsService = async (page, limit) => {
    const skip = (page - 1) * limit;
    return getAllBuffetMealsRepo(skip, Number(limit))

}
