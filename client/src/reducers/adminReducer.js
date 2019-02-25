import { ADD_PROJECT,ADD_DEVELOPER_LIST } from '../actions/types';
import isEmpty from '../helper/is-empty';

const initialState = {
    projectAdded: false,
    project: {},
    developerListAdded: false,
    developerList:{}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case ADD_DEVELOPER_LIST:
        debugger
            return {
                ...state,
                developerListAdded: !isEmpty(action.payload),
                developerList: action.payload
            }
        case ADD_PROJECT:
        debugger
            return {
                ...state,
                projectAdded: !isEmpty(action.payload),
                project: action.payload
            }
        default: 
            return state;
    }
}