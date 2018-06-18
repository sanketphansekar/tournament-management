import Express from 'express';

require('dotenv').config();

const routes = require('./routes').default;

const app = Express();
app.use(Express.static('dist'));
app.use(Express.json());

app.use('/api', routes);
app.listen(8080);
