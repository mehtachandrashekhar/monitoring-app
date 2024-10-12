const express = require('express');
const client = require('prom-client');

const app = express();
const port = 4000;

// Collect default Prometheus metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

// Basic Express route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Expose metrics endpoint for Prometheus
app.get('/metrics', (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(client.register.metrics());
});

// Start the server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
