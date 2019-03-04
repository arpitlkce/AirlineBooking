import {
    ITEM_FETCH_SUCCESS, LISTING_SUCCESS, CREATE_SUCCESS, CLOSE_MESSAGE, DELETE_SUCCESS,
    ENABLE_ITEM, ITEM_SEARCH_FETCH_SUCCESS, AUTH_SUCCESS, ITEM_OPERATION_FAIL
} from '../actionTypes';

export const itemListingSucceeded = (currentState = {}, action) => {
    switch (action.type) {
        case LISTING_SUCCESS:
            return action.items;
        default:
            return currentState;
    }
};

export const dismissMessageDone = (currentState = false, action) => {
    switch (action.type) {
        case CLOSE_MESSAGE:
            return action.item;
        default:
            return currentState;
    }
};

export const authSuccess = (currentState = false, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return action.value;
        default:
            return currentState;
    }
};

export const itemDisabled = (currentState = true, action) => {
    switch (action.type) {
        case ENABLE_ITEM:
            return action.item;
        default:
            return currentState;
    }
};

/**
 * Reducer to determine whether the item fetching succeeded and return the item
 * @param currentState
 * @param action
 * @returns {Object}
 */
export const itemFetchSucceeded = (currentState = null, action) => {
    switch (action.type) {
        case ITEM_FETCH_SUCCESS:
            return action.item;
        default:
            return currentState;
    }
};

/**
 * Reducer to determine whether the item fetching faled and return the item
 * @param currentState
 * @param action
 * @returns {Object}
 */
export const itemStatus = (currentState = null, action) => {
    switch (action.type) {
        case ITEM_OPERATION_FAIL:
            return action.item;
        default:
            return currentState;
    }
};

/**
 * Reducer to determine whether the item fetching succeeded and return the item
 * @param currentState
 * @param action
 * @returns {Object}
 */
export const itemSearchFetchSucceeded = (currentState = null, action) => {
    switch (action.type) {
        case ITEM_SEARCH_FETCH_SUCCESS:
            return action.item;
        default:
            return currentState;
    }
};

/**
 * Reducer to determine whether component create, update, delete operation succeeded or failed.
 * @param currentState
 * @param action
 * @returns {*}
 */
export const itemCUDStatusChange = (currentState = {succeeded: false}, action) => {
    switch (action.type) {
        case CREATE_SUCCESS:
            return {
                succeeded: true,
                message: action.message
            };
        case CLOSE_MESSAGE:
            return {
                succeeded: false
            };
        case DELETE_SUCCESS:
            return {
                succeeded: true,
                deleteSucceeded: true,
                message: action.message
            };
        default:
            return currentState;
    }
};
