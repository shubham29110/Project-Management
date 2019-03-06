import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import developerReducer from './developerReducer';
import projectReducer from './projectReducer';
import taskReducer from './taskReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    developer: developerReducer,
    project: projectReducer,
    task: taskReducer
});