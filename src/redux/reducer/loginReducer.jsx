import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS} from "../Constants";

const init = {
    email: [],
    data: {},
};

const LoginReducer = (state = init, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case LOGIN_FAILURE:
            return { ...state, loading: false, data: action.payload };
        default:
            return state;
    }
};

export default LoginReducer;
