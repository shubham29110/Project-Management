import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import developerReducer from './developerReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    developer: developerReducer,
    project: projectReducer
});