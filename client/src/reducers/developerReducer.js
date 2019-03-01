import { ADD_DEVELOPER_LIST ,ADD_DEVELOPER,ADD_ALL_DEVELOPER} from '../actions/types';
import isEmpty from '../helper/is-empty';

const initialState = {
    developerAdded:false,
    developer:[],
    developerListAdded: false,
    developerList:[],
    totalDeveloperAdded:false,
    totalDeveloper:{}
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

            case ADD_ALL_DEVELOPER:
        debugger
            return {
                ...state,
                totalDeveloperAdded: !isEmpty(action.payload),
                totalDeveloper: action.payload
            }
            case ADD_DEVELOPER:
            debugger
                return {
                    ...state,
                    developerAdded: !isEmpty(action.payload),
                    developer: action.payload
                }
        default: 
            return state;
    }
}