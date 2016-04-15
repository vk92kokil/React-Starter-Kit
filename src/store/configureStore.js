/**
 * Created by kokil on 16/04/16.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';
import rootReducer from '../reducers/reducers';
const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  reduxReactRouter({ routes, createHistory })
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
