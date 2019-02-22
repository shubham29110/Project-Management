import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import adminReducer from './adminReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    admin: adminReducer
});