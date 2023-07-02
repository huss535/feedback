const express = require('express');
const cors = require('cors');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

const entryNumber = uuidv4(); // Generate a unique entryNumber for the items parition key using UUID
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;



const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Specify the allowed origin
  methods: 'GET,POST' // Specify the allowed HTTP methods
 // allowedHeaders: 'Content-Type,Authorization', // Specify the allowed headers
}));
const port = 8000;

AWS.config.update({
  region: 'us-east-1',

 accessKeyId: accessKey ,
  secretAccessKey: secretAccessKey
  //endpoint: new AWS.Endpoint('http://localhost:8000'),
  
});

const dynamodb = new AWS.DynamoDB();

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

/**
 * @swagger
 * /api/{comment}:
 *   post:
 *     summary: Insert a comment into DynamoDB.
 *     parameters:
 *       - in: path
 *         name: comment
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success message
 *       500:
 *         description: Error message
 */
app.post('/api/:comment', (req, res) => {
  const comment = req.params.comment;

  const params = {
    TableName: 'employeeComments',
    Item: {
      'commentID': { 'S': entryNumber }, // Set partition key attribute
      'Comment': { 'S': comment },
    },
  };

  dynamodb.putItem(params, (err, data) => {
    if (err) {
      console.log('Error:', err);
      res.status(500).json({ error: err, message: 'Error inserting comment into DynamoDB' });
    } else {
      console.log('Item inserted successfully:', data);
      res.status(200).json({ message: 'Comment inserted successfully' });
    }
  });
});

/*
const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Express API with Swagger',
      version: '0.1.0',
      description: 'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Your Name',
        url: 'https://example.com',
        email: 'your-email@example.com',
      },
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./server.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
