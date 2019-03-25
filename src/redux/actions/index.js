import config from "../../utils/config";
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SOURCE_TABLE_SUCCESS,
    SOURCE_TABLE_FAILURE,
    DESTINATION_TABLE_SUCCESS,
    DESTINATION_TABLE_FAILURE,
    MAP_DATA,
    SAVE_DATA_SUCCESS,
    SAVE_DATA_FAILURE
} from "./actionTypes";

const headers = config.headers, BASE_URL = config.BASE_URL;

async function handleAPICall(params) {

    const apiObj = {
        method: params.TYPE || "GET",
        credentials: "same-origin",
        headers
    }

    if(params.TYPE === "POST") {
        apiObj.body = JSON.stringify(params.data);
    }

    const response = await fetch(params.END_POINT, apiObj);

    if(response) {

        const resJson = await response.json();

        try {
            params.dispatch({type: params.successAction, payload: resJson, data: params.data});
        } catch (e) {
            params.dispatch({type: params.failedAction, payload: resJson});
        }
    }
}

export function triggerLoginAPI(obj) {
    return dispatch => {
        const params = {
            dispatch,
            END_POINT: BASE_URL + "login_creds",
            successAction: LOGIN_SUCCESS,
            failedAction: LOGIN_FAILURE,
            data: obj
        }

        handleAPICall(params);
    }
}

export function triggerSourceTables() {
    return dispatch => {
        const params = {
            dispatch,
            END_POINT: BASE_URL + "source_tables",
            successAction: SOURCE_TABLE_SUCCESS,
            failedAction: SOURCE_TABLE_FAILURE
        }

        handleAPICall(params);
    }
}

export function triggerDestinationTables() {
    return dispatch => {
        const params = {
            dispatch,
            END_POINT: BASE_URL + "destination_tables",
            successAction: DESTINATION_TABLE_SUCCESS,
            failedAction: DESTINATION_TABLE_FAILURE
        }

        handleAPICall(params);
    }
}

export function mapDataInTable(payload) {
    return {
        type: MAP_DATA,
        payload
    }
}

export function OnSaveData(postObj) {
    return dispatch => {
        const params = {
            dispatch,
            END_POINT: BASE_URL + "destination_tables",
            successAction: SAVE_DATA_SUCCESS,
            failedAction: SAVE_DATA_FAILURE,
            TYPE: "POST",
            data: postObj
        }

        handleAPICall(params);
    }
}