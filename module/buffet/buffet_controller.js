const {commonResponse} = require('../../util/response');
const {addBuffetService} = require('./buffet_service');


let response;
exports.addBuffetController = async (req, res, next) => {
    try {
        const requestBody = req.body;
        const data = await addBuffetService(requestBody);

        response = commonResponse(
            true,
            data,
            'Buffet created successfully',
            null
        );
        res.status(201).send(response);
    } catch (err) {
        response = commonResponse(
            true,
            null,
            'Buffet creation failed',
            err
        );
        res.status(400).send(response);
    }
}
