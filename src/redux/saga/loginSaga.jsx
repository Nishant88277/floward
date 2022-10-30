import {all, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {LOGIN} from "../constants";
import {loginFailure, loginSuccess} from "../actions/loginAction";

function* loginRequest(actions) {
    try {
        const res = yield axios.post(`${import.meta.env.VITE_REQRES}/login`, {
            email: actions.payload.email.toLowerCase(),
            password: actions.payload.password,
        });
        if (res.status === 200) {
            localStorage.setItem('token', res.data.token)
            yield put(loginSuccess(res.data));
        } else yield put(loginFailure(res));
    } catch (e) {
        yield put(loginFailure(e));
    }
}

function* actionWatcher() {
    yield takeLatest(LOGIN, loginRequest);
}

export default function* LoginSaga() {
    yield all([actionWatcher()]);
}
