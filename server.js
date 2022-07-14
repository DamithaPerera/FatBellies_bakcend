const express = require('express');
const cors = require('cors');


const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = 3000;
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));








app.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:3000`),
);

module.exports = app;
