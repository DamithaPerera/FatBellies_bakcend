const {Router} = require('express');
const routes = Router();

const {
    addBuffetController,
    getAllBuffetMealsController,
    getOneBuffetMealsController,
    updateBuffetMealController
} = require('./buffet_controller');


routes.post('/', addBuffetController);
routes.get('/', getAllBuffetMealsController);
routes.get('/:id', getOneBuffetMealsController);
routes.put('/:id', updateBuffetMealController);





module.exports = routes;
