import axios from 'axios';
import {
    GET_PILL,
    GET_PILLS,
    POST_PILL,
    SEARCH_PILL,
    DELETE_PILL,
} from './types';
import { SERVER_URI, PILL_SERVER } from '../components/Config';

export function getPill(id) {
    return {
        type: GET_PILL,
        payload: axios.get(`${SERVER_URI}${PILL_SERVER}/${id}`).then(response => response.data)
    }
}

export function getPills(dataToSubmit) {
    return {
        type: GET_PILLS,
        payload: axios.post(`${SERVER_URI}${PILL_SERVER}`, dataToSubmit).then(response => response.data)
    }
}

export function postPill(dataToSubmit) {
    return {
        type: POST_PILL,
        payload: axios.post(`${SERVER_URI}${PILL_SERVER}`, dataToSubmit).then(response => response.data)
    }
}

export function deletePill(id) {
    return {
        type: DELETE_PILL,
        payload: axios.delete(`${SERVER_URI}${PILL_SERVER}/${id}`).then(response => response.data)
    }
}
