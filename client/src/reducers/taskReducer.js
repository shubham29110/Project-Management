import {ADD_TASK} from '../actions/types';
import isEmpty from '../helper/is-empty';

const initialState = {
    taskAdded: false,
    task: {},

}

export default function(state = initialState, action ) {
    switch(action.type) {
        case ADD_TASK:
        debugger
            return {
                ...state,
                taskAdded: !isEmpty(action.payload),
                task: action.payload
            }
        default: 
            return state;
    }
}