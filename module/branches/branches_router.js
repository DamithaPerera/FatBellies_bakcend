const {Router} = require('express');
const routes = Router();

const {
    addBranchesController,
    viewOneBranchController,
    viewAllBranchesController,
    updateBranchController
} = require('./branches_controller');


routes.post('/', addBranchesController);
routes.get('/:id', viewOneBranchController);
routes.get('/', viewAllBranchesController);
routes.put('/:id', updateBranchController);


module.exports = routes;
