const {
    addBuffetRepo,
    getAllBuffetMealsRepo,
    getOneBuffetMealsRepo,
    updateBuffetMealRepo,
    deleteBuffetRepo
} = require('./buffet_repo');


exports.addBuffetService = async (requestBody) => {
    return addBuffetRepo(requestBody)

}

exports.getAllBuffetMealsService = async (page, limit) => {
    const skip = (page - 1) * limit;
    return getAllBuffetMealsRepo(skip, Number(limit))

}

exports.getOneBuffetMealsService = async (buffetMealId) => {
    return getOneBuffetMealsRepo(buffetMealId)

}

exports.updateBuffetMealService = async (buffetMealId, requestBody) => {
    return updateBuffetMealRepo(buffetMealId, requestBody)

}

exports.deleteBuffetMealService = async (buffetMealId) => {
    return deleteBuffetRepo(buffetMealId)

}
