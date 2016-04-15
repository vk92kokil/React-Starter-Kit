/**
 * Created by kokil on 16/04/16.
 */
import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
const initialState = {

};
const rootReducer = combineReducers({router});
export default rootReducer;