import axios from 'axios'
import {GET_ERRORS,ADD_TASK} from './types';

export const addTask = (task) => async dispatch => {
  debugger
    try {
        const res= await axios.post('/admin/add-project', task)
        if(res){
          dispatch({
            type: ADD_TASK,
            payload: res.data
        });
        }
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}