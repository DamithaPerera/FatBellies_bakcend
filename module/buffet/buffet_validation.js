const Joi = require('joi');


exports.addBuffetValidation = (req, res, next) => {
    const schema = Joi.object({
        meal_plan_name: Joi.string().required().label('meal plan name is required'),
        maximum_capacity: Joi.number().required().label('maximum capacity is required'),
        price: Joi.number().required().label('price is required'),
        day: Joi.string().required().label('day is required'),
        start_time: Joi.string().required().label('start time is required'),
        end_time: Joi.string().required().label('end time is required'),
    });

    const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next();
    }
};

exports.viewAllBuffetValidation = (req, res, next) => {
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

exports.getOneBuffetValidation = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.string().required().label('Buffet Id Is required'),
    });

    const result = schema.validate(req.params);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next();
    }
};

exports.assignBuffetValidation = (req, res, next) => {
    const schema = Joi.object({
        branch_id: Joi.string().required().label('Branch Id Is required'),
        buffet_id: Joi.string().required().label('Buffet Id Is required'),
    });

    const result = schema.validate(req.query);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next();
    }
};
