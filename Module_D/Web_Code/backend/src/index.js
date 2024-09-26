const express = require('express');
const fs = require('fs');
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('../swagger');
const cors = require('cors');
const PORT = 3000;
const LOG_FILE = 'logs.json';

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

/**
 * @swagger
 * /store-log:
 *   post:
 *     description: Stores a log in the server
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: Log message
 *               timestamp:
 *                 type: string
 *                 description: Log timestamp
 *                 example: "2024-09-23T08:45:25.558Z"
 *     responses:
 *       201:
 *         description: Log saved successfully
 */
app.post('/store-log', (req, res) => {
    const logData = req.body;
    let logs = [];
    if (fs.existsSync(LOG_FILE)) {
        const logsFile = fs.readFileSync(LOG_FILE, 'utf-8');
        logs = JSON.parse(logsFile);
    }
    logs.push(logData);
    fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
    res.status(201).send({ message: 'Log saved successfully' });
});

/**
 * @swagger
 * /logs:
 *   get:
 *     description: Returns a list of logs
 *     responses:
 *       200:
 *         description: A list of logs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
app.get('/logs', (req, res) => {
    if (fs.existsSync(LOG_FILE)) {
        const logs = fs.readFileSync(LOG_FILE, 'utf-8');
        res.json(JSON.parse(logs));
    } else {
        res.json([]);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});