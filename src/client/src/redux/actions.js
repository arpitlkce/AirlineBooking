import { LISTING_SUCCESS, ITEM_FETCH_SUCCESS, CREATE_SUCCESS, CLOSE_MESSAGE, DELETE_SUCCESS,
    ENABLE_ITEM, ITEM_SEARCH_FETCH_SUCCESS, AUTH_SUCCESS, ITEM_OPERATION_FAIL } from './actionTypes';

export const itemListingSucceeded = (items) => {
    return {
        type: LISTING_SUCCESS,
        items
    };
};

export const isAuthSuccess = (value) => {
    return {
        type: AUTH_SUCCESS,
        value
    };
};

export const itemFetchSucceeded = item => {
    return {
        type: ITEM_FETCH_SUCCESS,
        item
    };
};

export const itemStatus = (item) => {
    return {
        type: ITEM_OPERATION_FAIL,
        item
    };
};

export const itemSearchFetchSucceeded = (item) => {
    return {
        type: ITEM_SEARCH_FETCH_SUCCESS,
        item
    };
};

export const itemCreateSuccess = (message) => {
    return {
        type: CREATE_SUCCESS,
        succeeded: true,
        message
    };
};

export const dismissMessage = (item) => {
    return {
        type: CLOSE_MESSAGE,
        item
    };
};

export const disabledItem = (item) => {
    return {
        type: ENABLE_ITEM,
        item
    };
};

export const itemDeleteSuccess = (message) => {
    return {
        type: DELETE_SUCCESS,
        succeeded: true,
        message
    };
};
