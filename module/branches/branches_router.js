const {Router} = require('express');
const routes = Router();

const {
    addBranchesController,
    viewOneBranchController,
    viewAllBranchesController,
    updateBranchController,
    deleteBranchController,
    searchBranchController
} = require('./branches_controller');

routes.post('/', addBranchesController);
routes.get('/search', searchBranchController);
routes.get('/:id', viewOneBranchController);
routes.get('/', viewAllBranchesController);
routes.put('/:id', updateBranchController);
routes.delete('/:id', deleteBranchController);


module.exports = routes;
