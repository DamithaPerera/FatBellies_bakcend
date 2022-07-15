const {addBuffetRepo} = require('./buffet_repo');


exports.addBuffetService = async (requestBody) => {

    return addBuffetRepo(requestBody)

}
