import Express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import path from 'path';

import Layout from '../client/components/AppLayout';

require('dotenv').config();

const routes = require('./routes').default;

const app = Express();
app.use(Express.static('dist'));
app.use(Express.json());

app.use('/api', routes);

// set the view engine to ejs
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use((req, res) => {
  const context = {};

  const html = ReactDOMServer.renderToString(<StaticRouter location={req.url} context={context}>
    <Layout />
  </StaticRouter>);

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.render('index', { html });
  }
});

app.listen(8080);
