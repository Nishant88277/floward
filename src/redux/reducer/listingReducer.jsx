import {LISTING, LISTING_FAILURE, LISTING_SUCCESS} from "../Constants";

const init = {};

const ListingReducer = (state = init, action) => {
    switch (action.type) {
        case LISTING:
            return { ...state, loading: true };
        case LISTING_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case LISTING_FAILURE:
            return { ...state, loading: false, data: action.payload };
        default:
            return state;
    }
};

export default ListingReducer;
