import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import './assets/css/material-dashboard-react.css?v=1.3.0';

import indexRoutes from './routes/index';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop) => (<Route 
        path={prop.path}
        component={prop.component}
        key={prop.path}
      />)}
    </Switch>
  </Router>,
  document.getElementById('root'),
);
