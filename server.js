const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/db');

const branches = require('./module/branches/branches_router');
const buffet = require('./module/buffet/buffet_router');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = 3000;
const app = express();


// DB connection
dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/v1/branches', branches);
app.use('/v1/buffet', buffet);

//swagger documentation
//swagger options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'FatBellies project',
            version: '1.0.0',
            description:
                'Backend server build with node js and mongo db using rest api',
            contact: {
                name: 'Damitha Perera',
                email: 'damithaperera777@gmail.com',
            },
        },

        servers: [
            {
                url: 'http://localhost:3000/v1',
                description: 'Development server',
            }
        ]
    },
    apis: ['./module/branches/branches_router.js', './module/buffet/buffet_router.js'],
};
const specs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:3000`),
);

module.exports = app;
