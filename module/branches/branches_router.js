const {Router} = require('express');
const routes = Router();

const {addBranchesController, viewOneBranchController, viewAllBranchesController} = require('./branches_controller');


routes.post('/', addBranchesController);
routes.get('/:id', viewOneBranchController);
routes.get('/', viewAllBranchesController);


module.exports = routes;
