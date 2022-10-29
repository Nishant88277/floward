import {LISTING, LISTING_FAILURE, LISTING_SUCCESS} from "../constants";

export const listing = (payload) => ({
    type: LISTING,
    payload,
});

export const listingSuccess = (payload) => ({
    type: LISTING_SUCCESS,
    payload,
});

export const listingFailure = (payload) => ({
    type: LISTING_FAILURE,
    payload,
});
