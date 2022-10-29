import {DETAIL, DETAIL_FAILURE, DETAIL_SUCCESS} from "../Constants";

const init = {
    code: {},
};

const DetailReducer = (state = init, action) => {
    switch (action.type) {
        case DETAIL:
            return { ...state, loading: true };
        case DETAIL_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case DETAIL_FAILURE:
            return { ...state, loading: false, data: action.payload };
        default:
            return state;
    }
};

export default DetailReducer;
