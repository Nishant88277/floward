import {all, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {LISTING} from "../constants";
import {listingFailure, listingSuccess} from "../actions/listingAction";

function* listingRequest() {
    try {
        const res = yield axios.get(`${import.meta.env.VITE_REST}/all`);
        if (res.status === 200) {
            yield put(listingSuccess(res.data));
        } else yield put(listingFailure(res));
    } catch (e) {
        yield put(listingFailure(e));
    }
}

function* actionWatcher() {
    yield takeLatest(LISTING, listingRequest);
}

export default function* ListingSaga() {
    yield all([actionWatcher()]);
}
