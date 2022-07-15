const {Router} = require('express');
const routes = Router();

const {
    addBuffetController,
    getAllBuffetMealsController,
    getOneBuffetMealsController,
    updateBuffetMealController,
    deleteBuffetMealController,
    assignBuffetToBranchController
} = require('./buffet_controller');


routes.post('/', addBuffetController);
routes.get('/', getAllBuffetMealsController);
routes.get('/:id', getOneBuffetMealsController);
routes.put('/:id', updateBuffetMealController);
routes.delete('/:id', deleteBuffetMealController);
routes.post('/assign', assignBuffetToBranchController);


module.exports = routes;
