const buffetModel = require('../../models/buffet_meal');


exports.addBuffetRepo = async (requestBody) => {
    return buffetModel.create(requestBody)
}
