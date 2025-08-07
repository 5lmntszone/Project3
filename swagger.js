const fs = require('fs');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Movies & Reviews API',
      version: '1.0.0',
      description: 'API with full CRUD for Movies and Reviews with GitHub OAuth login'
    },
    servers: [
      { url: 'https://project3-zo0c.onrender.com' },
      { url: 'http://localhost:3000' }
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'connect.sid', 
        },
      },
    },
    security: [
      {
        cookieAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsDoc(options);
fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));
console.log('swagger.json generated');
