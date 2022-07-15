const {Router} = require('express');
const routes = Router();

const {
    addBuffetController
} = require('./buffet_controller');


routes.post('/', addBuffetController);





module.exports = routes;
