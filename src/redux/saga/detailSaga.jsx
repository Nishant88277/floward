import {all, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {DETAIL} from "../constants";
import {detailFailure, detailSuccess} from "../actions/detailAction";

function* detailRequest(actions) {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token")

    try {
        const res = yield axios.post(`${import.meta.env.VITE_REST}/alpha/${actions.payload}`);
        if (res.status === 200) {
            localStorage.setItem('token', res.data.token)
            yield put(detailSuccess(res.data));
        } else yield put(detailFailure(res));
    } catch (e) {
        yield put(detailFailure(e));
    }
}

function* actionWatcher() {
    yield takeLatest(DETAIL, detailRequest);
}

export default function* DetailSaga() {
    yield all([actionWatcher()]);
}
