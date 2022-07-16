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

const {
    addBranchesValidation,
    viewAllBranchesValidation,
    getOneBranchValidation,
    searchBranchesValidation
} = require('./branches_validation');

routes.post('/', addBranchesValidation, addBranchesController);
routes.get('/search', searchBranchesValidation, searchBranchController);
routes.get('/all', viewAllBranchesValidation, viewAllBranchesController);
routes.get('/:id', getOneBranchValidation, viewOneBranchController);
routes.put('/:id', addBranchesValidation, updateBranchController);
routes.delete('/:id', getOneBranchValidation, deleteBranchController);


module.exports = routes;
