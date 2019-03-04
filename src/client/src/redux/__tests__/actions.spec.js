import * as actions from '../actions';
import {
    AUTH_SUCCESS,
    CLOSE_MESSAGE, CREATE_SUCCESS, DELETE_SUCCESS, ENABLE_ITEM, ITEM_FETCH_SUCCESS, ITEM_OPERATION_FAIL,
    ITEM_SEARCH_FETCH_SUCCESS, LISTING_SUCCESS
} from '../actionTypes';

describe('actions', () => {
    it('should create an action to dismiss Message', () => {
        const item = true;
        const expectedAction = {
            type: CLOSE_MESSAGE,
            item
        };
        expect(actions.dismissMessage(item)).toEqual(expectedAction);
    });

    it('should create an action to disable', () => {
        const item = true;
        const expectedAction = {
            type: ENABLE_ITEM,
            item
        };
        expect(actions.disabledItem(item)).toEqual(expectedAction);
    });

    it('should create an action to itemDeleteSuccess', () => {
        const message = 'delete Success';
        const expectedAction = {
            type: DELETE_SUCCESS,
            succeeded: true,
            message
        };
        expect(actions.itemDeleteSuccess(message)).toEqual(expectedAction);
    });

    it('should create an action to itemCreateSuccess', () => {
        const message = 'create Success';
        const expectedAction = {
            type: CREATE_SUCCESS,
            succeeded: true,
            message
        };
        expect(actions.itemCreateSuccess(message)).toEqual(expectedAction);
    });

    it('should create an action to itemSearchFetchSucceeded', () => {
        const item = 'SearchFetchSucceeded';
        const expectedAction = {
            type: ITEM_SEARCH_FETCH_SUCCESS,
            item
        };
        expect(actions.itemSearchFetchSucceeded(item)).toEqual(expectedAction);
    });

    it('should create an action to itemStatus', () => {
        const item = 'success';
        const expectedAction = {
            type: ITEM_OPERATION_FAIL,
            item
        };
        expect(actions.itemStatus(item)).toEqual(expectedAction);
    });

    it('should create an action to itemFetchSucceeded', () => {
        const item = 'fetch success';
        const expectedAction = {
            type: ITEM_FETCH_SUCCESS,
            item
        };
        expect(actions.itemFetchSucceeded(item)).toEqual(expectedAction);
    });

    it('should create an action to isAuthSuccess', () => {
        const value = 'Auth success';
        const expectedAction = {
            type: AUTH_SUCCESS,
            value
        };
        expect(actions.isAuthSuccess(value)).toEqual(expectedAction);
    });

    it('should create an action to itemListingSucceeded', () => {
        const items = [];
        const expectedAction = {
            type: LISTING_SUCCESS,
            items
        };
        expect(actions.itemListingSucceeded(items)).toEqual(expectedAction);
    });
});
