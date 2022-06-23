import {
    GET_SEARCH_HISTORIES,
    DELETE_SEARCH_HISTORY,
    POST_SEARCH_HISTORY,
} from '../_actions/types';

export default (state={}, action) => {
    switch(action.type){
        case GET_SEARCH_HISTORIES:
            return {...state, getSearchHistories: action.payload };
        case POST_SEARCH_HISTORY:
            return {...state, postSearchHistory: action.payload };
        case DELETE_SEARCH_HISTORY:
            return {...state, deleteSearchHistory: action.payload };
        default:
            return state;
    }
}