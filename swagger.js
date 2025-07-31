const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Movies & Reviews API',
      version: '1.0.0',
      description: 'API with full CRUD for Movies and Reviews, including validation and error handling'
    },
    servers: [
      {
        url: 'https://project3-zo0c.onrender.com',
      },
    ],
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJsDoc(options);

function swaggerDocs(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = swaggerDocs;
