const {commonResponse} = require('../../util/response');
const {addBuffetService, getAllBuffetMealsService, getOneBuffetMealsService} = require('./buffet_service');


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

exports.getAllBuffetMealsController = async (req, res, next) => {
    try {
        const {page, limit} = req.query
        const data = await getAllBuffetMealsService(page, limit);

        response = commonResponse(
            true,
            data,
            'Buffet meals retrieve successfully',
            null
        );
        res.status(200).send(response);
    } catch (err) {
        response = commonResponse(
            true,
            null,
            'Buffet meals retrieve failed',
            err
        );
        res.status(400).send(response);
    }
}

exports.getOneBuffetMealsController = async (req, res, next) => {
    try {
        const buffetMealId= req.params.id;
        const data = await getOneBuffetMealsService(buffetMealId);

        response = commonResponse(
            true,
            data,
            'Buffet meal retrieve successfully',
            null
        );
        res.status(200).send(response);
    } catch (err) {
        response = commonResponse(
            true,
            null,
            'Buffet meal retrieve failed',
            err
        );
        res.status(400).send(response);
    }
}
