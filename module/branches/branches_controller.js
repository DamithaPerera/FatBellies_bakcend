const {addBranchesService} = require('./branches_service')
const {commonResponse} = require("../../util/response");


let response;
exports.addBranchesController = async (req, res, next) => {
    try {
        const requestBody = req.body;
        const data = await addBranchesService(requestBody);

        response = commonResponse(
            true,
            data,
            'Branch creation success',
            null
        );
        res.status(201).send(response);
    } catch (err) {
        response = commonResponse(
            true,
            null,
            'Branch creation failed',
            err
        );
        res.status(400).send(response);
    }
}
