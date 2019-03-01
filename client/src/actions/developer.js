import axios from 'axios';
import { GET_ERRORS,ADD_DEVELOPER_LIST,ADD_DEVELOPER,ADD_ALL_DEVELOPER} from './types';



export const getDeveloper = (technology) => async dispatch => {
  debugger
    try { 
        const response= await axios.post(`/admin/get-developer`, technology.technology )
        if(response){
          dispatch({
            type: ADD_DEVELOPER_LIST,
            payload: response.data
        });
        }
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}

export const addCorrespondingDeveloper = (developer,) => async dispatch => {
  debugger
    try {
        if(developer){
          dispatch({
            type: ADD_DEVELOPER,
            payload: developer
        });
        }
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}

export const fecthTotalDeveloper = (project, history) => async dispatch => {
  debugger
    try {
        const res= await axios.get('/admin/developer-list')
        if(res){
          dispatch({
            type: ADD_ALL_DEVELOPER,
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




