import { ADD_PROJECT } from '../actions/types';
import isEmpty from '../helper/is-empty';

const initialState = {
    projectAdded: false,
    project: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
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