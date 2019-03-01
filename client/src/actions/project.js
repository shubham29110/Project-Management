import axios from 'axios'
import { GET_ERRORS,ADD_TECHNOLOGY,ADD_PROJECT,ADD_PROJECT_LIST,ADD_ASSIGNED_PROJECT} from './types';

export const addTechnology = (technology) => async dispatch => {
  debugger
    try {
        if(technology){
          dispatch({
            type: ADD_TECHNOLOGY,
            payload: technology
        });
        }
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}



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
  

  export const fecthProjectList = (project, history) => async dispatch => {
    debugger
      try {
          const res= await axios.get('/admin/project-list')
          if(res){
            dispatch({
              type: ADD_PROJECT_LIST,
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

  export const fecthAssignedProject = (token) => async dispatch => {
    debugger
      try {
          const res= await axios.post('/assigned-project',token)
          if(res){
            dispatch({
              type: ADD_ASSIGNED_PROJECT,
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
