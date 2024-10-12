const client = require('prom-client');
const collectDefaultMetrics = cliend.collectDefaultMetrics;

collectDefaultMetrics();

app.get('/metrics', (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(client.register.metrics());
});

