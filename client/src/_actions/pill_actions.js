import axios from 'axios';
import {
    GET_PILL,
    GET_PILLS,
    POST_PILL,
} from './types';
import { SERVER_URI, PILL_SERVER } from '../components/Config';

export function getPills(body) {
    return {
        type: GET_PILLS,
        payload: axios.get(`${SERVER_URI}${PILL_SERVER}`, {
            params: body
        }).then(response => response.data)
    }
}

export function getPill(id) {
    return {
        type: GET_PILL,
        payload: axios.get(`${SERVER_URI}${PILL_SERVER}/${id}`).then(response => response.data)
    }
}

export function postPill(dataToSubmit) {
    return {
        type: POST_PILL,
        payload: axios.post(`${SERVER_URI}${PILL_SERVER}`, dataToSubmit).then(response => response.data)
    }
}
