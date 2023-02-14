import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxthunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewares = [reduxthunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
