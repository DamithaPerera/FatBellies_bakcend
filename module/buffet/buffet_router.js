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


/**
 * @swagger
 * components:
 *   schemas:
 *    buffet:
 *     type: object
 *     required:
 *      - name
 *      - description
 *     properties:
 *        meal_plan_name:
 *          type: string
 *          description: meal plan name
 *        maximum_capacity:
 *          type: integer
 *          description: maximum capacity
 *        price:
 *          type: integer
 *          description: price
 *        day:
 *          type: string
 *          description: day
 *        start_time:
 *          type: string
 *          description: start_time
 *        end_time:
 *          type: string
 *          description: end_time
 *

 *     example:
 *        meal_plan_name: "Buffet D"
 *        maximum_capacity: 5
 *        price: 560.30
 *        day: "Monday"
 *        start_time: "06.00"
 *        end_time: "09.00"
 *
 *
 */

/**
 * @swagger
 * tags:
 *   name: buffet
 *   description: buffet Api's
 */

/**
 * @swagger
 * /buffet:
 *  post:
 *   summary: Create new buffet
 *   tags: [buffet]
 *   description: create new buffet
 *   requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/buffet'
 *
 *   responses:
 *    201:
 *     description: Buffet created successfully
 *    400:
 *      description: Buffet creation failed
 *    422:
 *      description: Buffet creation validation error
 *    500:
 *     description : error
 */
routes.post('/', addBuffetValidation, addBuffetController);

/**
 * @swagger
 * /buffet/:
 *  get:
 *   summary: get all buffet
 *   tags: [buffet]
 *   description: get all buffet
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
 *     description: Buffet meals retrieve successfully
 *    400:
 *      description: Buffet meals retrieve failed
 *    422:
 *      description: Buffet meals retrieve validation error
 *    500:
 *     description : error
 */
routes.get('/', viewAllBuffetValidation, getAllBuffetMealsController);

/**
 * @swagger
 * /buffet/{id}:
 *  get:
 *   summary: get single buffet
 *   tags: [buffet]
 *   description: get single buffet
 *   parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The buffet id

 *
 *
 *
 *   responses:
 *    200:
 *     description: Buffet meal retrieve successfully
 *    400:
 *      description: Buffet meal retrieve failed
 *    500:
 *     description : error
 */
routes.get('/:id', getOneBuffetValidation, getOneBuffetMealsController);

/**
 * @swagger
 * /buffet/{id}:
 *  put:
 *   summary: update buffet
 *   tags: [buffet]
 *   description: update buffet
 *   requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/buffet'
 *
 *   responses:
 *    200:
 *     description: Buffet meal update successfully
 *    400:
 *      description: Buffet meal update failed
 *    422:
 *      description: Buffet meal update validation error
 *    500:
 *     description : error
 */
routes.put('/:id', addBuffetValidation, updateBuffetMealController);

/**
 * @swagger
 * /buffet/{id}:
 *  delete:
 *   summary: delete single buffet
 *   tags: [buffet]
 *   description: delete single buffet
 *   parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The buffet id

 *
 *
 *
 *   responses:
 *    200:
 *     description: Buffet meal delete successfully
 *    400:
 *      description: Buffet meal delete failed
 *    500:
 *     description : error
 */
routes.delete('/:id', getOneBuffetValidation, deleteBuffetMealController);

/**
 * @swagger
 * components:
 *   schemas:
 *    buffet-assign:
 *     type: object
 *     required:
 *      - branch_id
 *      - buffet_id
 *     properties:
 *        branch_id:
 *          type: string
 *          description: branch id
 *          example: 62d109653f6cd541bcd79915
 *        buffet_id:
 *          type: integer
 *          description: buffet id
 *          example: 62d1be64eeb979401c94d157
 *
 *
 */

/**
 * @swagger
 * /buffet/assign:
 *  post:
 *   summary: assign buffet to branch
 *   tags: [buffet]
 *   description: assign buffet to branch
 *   requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/buffet-assign'
 *
 *   responses:
 *    201:
 *     description: Buffet meal assign to branch successfully
 *    400:
 *      description: Buffet meal assign to branch failed
 *    422:
 *      description: Buffet meal assign to branch validation error
 *    500:
 *     description : error
 */
routes.post('/assign', assignBuffetValidation, assignBuffetToBranchController);


module.exports = routes;
