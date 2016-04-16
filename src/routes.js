import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import AppContainer from './components/Container/AppContainer';
import App from './components/Presentational/App';
export default(
  <Router>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={App} />
    </Route>
  </Router>
);
