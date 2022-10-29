import {all} from "redux-saga/effects";
import LoginSaga from "./saga/loginSaga";
import ListingSaga from "./saga/listingSaga";
import DetailSaga from "./saga/detailSaga";

export default function* rootSaga() {
    yield all([
        LoginSaga(),
        ListingSaga(),
        DetailSaga()
    ])
}