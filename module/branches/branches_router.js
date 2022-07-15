const {Router} = require('express');
const routes = Router();

const {addBranchesController, viewOneBranchController} = require('./branches_controller');


routes.post('/', addBranchesController);
routes.get('/:id', viewOneBranchController);








module.exports = routes;
