const {Router} = require('express');
const routes = Router();

const {
    addBuffetController,
    getAllBuffetMealsController
} = require('./buffet_controller');


routes.post('/', addBuffetController);
routes.get('/', getAllBuffetMealsController);





module.exports = routes;
