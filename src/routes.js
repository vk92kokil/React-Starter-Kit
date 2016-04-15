import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import App from './components/AppContainer';
import TestComponent from './components/TestComponent';
import Root from './components/Root';
export default(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={TestComponent} />
    </Route>
  </Router>
)
