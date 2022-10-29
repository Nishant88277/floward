import {DETAIL, DETAIL_FAILURE, DETAIL_SUCCESS} from "../constants";

export const detail = (payload) => ({
    type: DETAIL,
    payload,
});

export const detailSuccess = (payload) => ({
    type: DETAIL_SUCCESS,
    payload,
});

export const detailFailure = (payload) => ({
    type: DETAIL_FAILURE,
    payload,
});
