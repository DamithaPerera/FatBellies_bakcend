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

/**
 * @swagger
 * components:
 *   schemas:
 *    branch:
 *     type: object
 *     required:
 *      - name
 *      - description
 *     properties:
 *        branch_name:
 *          type: string
 *          description: name of the branch
 *        coordinates:
 *          type: array
 *          description: coordinates of the branch
 *        opening_hours:
 *          type: object array
 *          description: opening hours of the branch
 *
 *
 *
 *     example:
 *        branch_name: "my branch"
 *        coordinates: [ 6.9271, 79.8612]
 *        opening_hours: [{
 *               "Monday": {
                "start": "9:00",
                "end": "17:00"
            },
                "Tuesday": {
                "start": "9:00",
                "end": "17:00"
            },
                "Wednesday": {
                "start": "9:00",
                "end": "17:00"
            },
                "Thursday": {
                "start": "9:00",
                "end": "17:00"
            },
                 "Friday": {
                "start": "9:00",
                "end": "17:00"
            },
                "Saturday": {
                "start": "9:00",
                "end": "17:00"
            },
                "Sunday": {
                "start": "9:00",
                "end": "17:00"
            }
 *        }]
 */

/**
 * @swagger
 * tags:
 *   name: branch
 *   description: branch Api's
 */

/**
 * @swagger
 * /branches:
 *  post:
 *   summary: Create new branch
 *   tags: [branch]
 *   description: create new branch
 *   requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/branch'
 *
 *   responses:
 *    201:
 *     description: Branch creation success
 *    400:
 *      description: Branch creation failed
 *    422:
 *      description: Branch validation error
 *    500:
 *     description : error
 */
routes.post('/', addBranchesValidation, addBranchesController);

/**
 * @swagger
 * /branches/search:
 *  get:
 *   summary: get search branches
 *   tags: [branch]
 *   description: get search branches
 *   parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        required: true
 *        description: Pagination page
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *        required: true
 *        description: Pagination page limit
 *      - in: query
 *        name: name
 *        schema:
 *          type: string
 *        required: false
 *        description: branch name
 *      - in: query
 *        name: price
 *        schema:
 *          type: integer
 *        required: false
 *        description: price
 *      - in: query
 *        name: coordinates
 *        schema:
 *          type: Array
 *        required: false
 *        description: coordinates
 *
 *
 *   responses:
 *    200:
 *     description: All Branches retrieved successfully
 *    400:
 *      description: Branch retrieved failed
 *    422:
 *      description: Branch retrieved validation error
 *    500:
 *     description : error
 */
routes.get('/search', searchBranchesValidation, searchBranchController);

/**
 * @swagger
 * /branches/all:
 *  get:
 *   summary: get all branches
 *   tags: [branch]
 *   description: get all branches
 *   parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        required: true
 *        description: Pagination page
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *        required: true
 *        description: Pagination page limit
 *
 *
 *   responses:
 *    200:
 *     description: All Branches retrieved successfully
 *    400:
 *      description: Branch retrieved failed
 *    422:
 *      description: Branch retrieved validation error
 *    500:
 *     description : error
 */
routes.get('/all', viewAllBranchesValidation, viewAllBranchesController);

/**
 * @swagger
 * /branches/{id}:
 *  get:
 *   summary: get single branch
 *   tags: [branch]
 *   description: get single branch
 *   parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The branch id

 *
 *
 *
 *   responses:
 *    200:
 *     description: Branch retrieved successfully
 *    400:
 *      description: Branch retrieved failed
 *    500:
 *     description : error
 */
routes.get('/:id', getOneBranchValidation, viewOneBranchController);


/**
 * @swagger
 * /branches/{id}:
 *  put:
 *   summary: Update branch
 *   tags: [branch]
 *   description: Update branch
 *   requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/branch'
 *
 *   responses:
 *    201:
 *     description: Branch update successfully
 *    400:
 *      description: Branch update failed
 *    422:
 *      description: Branch update validation error
 *    500:
 *     description : error
 */
routes.put('/:id', addBranchesValidation, updateBranchController);

/**
 * @swagger
 * /branches/{id}:
 *  delete:
 *   summary: delete single branch
 *   tags: [branch]
 *   description: delete single branch
 *   parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The branch id

 *
 *
 *
 *   responses:
 *    200:
 *     description: Branch deleted successfully
 *    400:
 *      description: Branch delete failed
 *    500:
 *     description : error
 */
routes.delete('/:id', getOneBranchValidation, deleteBranchController);


module.exports = routes;
