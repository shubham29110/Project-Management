import { ADD_TECHNOLOGY, ADD_PROJECT,ADD_PROJECT_LIST,ADD_ASSIGNED_PROJECT} from '../actions/types';
import isEmpty from '../helper/is-empty';

const initialState = {
    technologyAdded: false,
    technology:[],
    projecttAdded: false,
    project: {},
    projectListAdded:false,
    projectList:{},
    newProjectAdded:false,
    newProject:{}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case ADD_TECHNOLOGY:
        debugger
            return {
                ...state,
                technologyAdded: !isEmpty(action.payload),
                technology: action.payload
            }
       
            case ADD_PROJECT:
            debugger
                return {
                    ...state,
                    projectAdded: !isEmpty(action.payload),
                    project: action.payload
                }
            case ADD_PROJECT_LIST:
            debugger
                return {
                    ...state,
                    projectListAdded: !isEmpty(action.payload),
                    projectList: action.payload
                }

                case ADD_ASSIGNED_PROJECT:
                debugger
                    return {
                        ...state,
                        newProjectAdded: !isEmpty(action.payload),
                        newProject: action.payload
                    }
        default: 
            return state;
    }
}