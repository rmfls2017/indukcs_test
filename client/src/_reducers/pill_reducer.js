import {
    GET_PILL,
    POST_PILL,
    SEARCH_PILL,
    DELETE_PILL,
} from '../_actions/types';

export default (state={}, action) => {
    switch(action.type){
        case GET_PILL:
            return {...state, getPill: action.payload };
        case POST_PILL:
            return { ...state, postPill: action.payload };
        case SEARCH_PILL:
            return {...state, searchPill: action.payload };
        case DELETE_PILL:
            return {...state, deletePill: action.payload };
        default:
            return state;
    }
}