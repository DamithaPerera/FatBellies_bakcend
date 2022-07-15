const {Router} = require('express');
const routes = Router();

const {addBranchesController} = require('./branches_controller');


routes.post('/', addBranchesController);








module.exports = routes;
