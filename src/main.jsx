import React from 'react'
import ReactDOM from 'react-dom'
import './static/css/index.css'
import App from './App'

// redux-saga
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./redux/reducer";
import rootSaga from "./redux/saga";

// Create redux store with history
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)
