import axios from 'axios';
import {
    GET_SEARCH_HISTORIES,
    DELETE_SEARCH_HISTORY,
    POST_SEARCH_HISTORY,
} from './types';
import { SERVER_URI, SEARCH_HISOTRY_SERVER } from '../components/Config';

export function getHistories(body) {
    return {
        type: GET_SEARCH_HISTORIES,
        payload: axios.get(`${SERVER_URI}${SEARCH_HISOTRY_SERVER}`, {
            params: body
        }).then(response => response.data)
    }
}

export function postHistory(dataToSubmit) {
    return {
        type: POST_SEARCH_HISTORY,
        payload: axios.post(`${SERVER_URI}${SEARCH_HISOTRY_SERVER}`, dataToSubmit).then(response => response.data)
    }
}

export function deleteHistory(_id) {
    return {
        type: DELETE_SEARCH_HISTORY,
        payload: axios.delete(`${SERVER_URI}${SEARCH_HISOTRY_SERVER}/${_id}`).then(response => response.data)
    }
}
