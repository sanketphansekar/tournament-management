import Express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import path from 'path';

import configureStore from '../shared/store/configureStore';
import App from '../client/App';

require('dotenv').config();

const routes = require('./routes').default;
const logger = require('./utils/logger').default;

const app = Express();
app.use(Express.static('dist'));
app.use(Express.json());

app.use('/api', routes);

app.use('/apidoc', Express.static(`${__dirname}/../../apidoc`));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use((req, res) => {
  const context = {};

  const html = ReactDOMServer.renderToString(<Provider store={configureStore()}>
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
                                             </Provider>);
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.render('index', { html });
    res.end();
  }
});

app.listen(8080, () => {
  logger.info('Server running');
});
