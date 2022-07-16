const Joi = require('joi');


exports.addBranchesValidation = (req, res, next) => {
    const schema = Joi.object({
        branch_name: Joi.string().required().label('Branch name is required'),
        coordinates: Joi.array().required().label('coordinates is required'),
        opening_hours: Joi.array().required().label('opening_hours is required'),
    });

    const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next();
    }
};

exports.viewAllBranchesValidation = (req, res, next) => {
    const schema = Joi.object({
        page: Joi.number().required().min(1),
        limit: Joi.number().required().min(1),
    });

    const result = schema.validate(req.query);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next();
    }
};

exports.getOneBranchValidation = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.string().required().label('Branch Id Is required'),
    });

    const result = schema.validate(req.params);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next();
    }
};

exports.searchBranchesValidation = (req, res, next) => {
    const schema = Joi.object({
        page: Joi.number().required(),
        limit: Joi.number().required(),
        coordinates: Joi.string().optional(),
        name: Joi.string().optional(),
        price: Joi.string().optional(),
    });

    const result = schema.validate(req.query);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next();
    }
};
