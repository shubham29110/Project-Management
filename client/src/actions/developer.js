import axios from 'axios';
import { GET_ERRORS,ADD_DEVELOPER_LIST,ADD_DEVELOPER} from './types';



export const getDeveloper = (technology) => async dispatch => {
  debugger
    try { 
        const res= await axios.post(`/admin/get-developer`, technology.technology )
        if(res){
          dispatch({
            type: ADD_DEVELOPER_LIST,
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

export const addCorrespondingDeveloper = (developer) => async dispatch => {
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


