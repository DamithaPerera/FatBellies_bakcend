const {Router} = require('express');
const routes = Router();

const {
    addBuffetController,
    getAllBuffetMealsController,
    getOneBuffetMealsController
} = require('./buffet_controller');


routes.post('/', addBuffetController);
routes.get('/', getAllBuffetMealsController);
routes.get('/:id', getOneBuffetMealsController);





module.exports = routes;
