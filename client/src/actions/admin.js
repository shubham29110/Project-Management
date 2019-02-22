import axios from 'axios';
import { GET_ERRORS, ADD_PROJECT} from './types';

export const addProject = (project, history) => async dispatch => {
  debugger
    try {
        const res= await axios.post('/admin/add-project', project)
        if(res){
          dispatch({
            type: ADD_PROJECT,
            payload: res.data
        });
         history.push('/Projects')
        }
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}



