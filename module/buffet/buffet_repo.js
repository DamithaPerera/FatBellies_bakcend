const buffetModel = require('../../models/buffet_meal');


exports.addBuffetRepo = async (requestBody) => {
    return buffetModel.create(requestBody)
}

exports.getAllBuffetMealsRepo = async (skip, limit) => {
    return buffetModel.find().skip(skip).limit(limit)
}
