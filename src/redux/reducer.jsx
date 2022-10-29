import {combineReducers} from "redux";
import LoginReducer from "./reducer/loginReducer";
import ListingReducer from "./reducer/listingReducer";
import DetailReducer from "./reducer/detailReducer";

export default combineReducers({
    LoginReducer,
    ListingReducer,
    DetailReducer
});