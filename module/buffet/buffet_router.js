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

const {
    addBuffetValidation,
    viewAllBuffetValidation,
    getOneBuffetValidation,
    assignBuffetValidation
} = require('./buffet_validation');

routes.post('/', addBuffetValidation, addBuffetController);
routes.get('/', viewAllBuffetValidation, getAllBuffetMealsController);
routes.get('/:id', getOneBuffetValidation, getOneBuffetMealsController);
routes.put('/:id', addBuffetValidation, updateBuffetMealController);
routes.delete('/:id', getOneBuffetValidation, deleteBuffetMealController);
routes.post('/assign', assignBuffetValidation, assignBuffetToBranchController);


module.exports = routes;
