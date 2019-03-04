import { itemFetchSucceeded, itemListingSucceeded,
    dismissMessageDone, itemDisabled, authSuccess,
    itemStatus, itemSearchFetchSucceeded, itemCUDStatusChange } from '../baseReducer';

describe('baseReducers test', () => {
    it('should return true on itemListingSucceeded', () => {
        const actual = itemListingSucceeded(undefined, {type: 'LISTING_SUCCESS', items: [1, 2, 3]});
        const expected = [1, 2, 3];

        expect(actual).toEqual(expected);
    });

    it('should return false on itemListingSucceeded', () => {
        const actual = itemListingSucceeded(undefined, {type: 'DUMMY'});
        const expected = {};

        expect(actual).toEqual(expected);
    });

    it('should return true on dismissMessageDone', () => {
        const actual = dismissMessageDone(undefined, {type: 'CLOSE_MESSAGE', item: true});
        const expected = true;

        expect(actual).toEqual(expected);
    });

    it('should return false on dismissMessageDone', () => {
        const actual = dismissMessageDone(undefined, {type: 'DUMMY'});
        const expected = false;

        expect(actual).toEqual(expected);
    });

    it('should return true on authSuccess', () => {
        const actual = authSuccess(undefined, {type: 'AUTH_SUCCESS', value: true});
        const expected = true;

        expect(actual).toEqual(expected);
    });

    it('should return false on authSuccess', () => {
        const actual = authSuccess(undefined, {type: 'DUMMY'});
        const expected = false;

        expect(actual).toEqual(expected);
    });

    it('should return true on itemDisabled', () => {
        const actual = itemDisabled(undefined, {type: 'ENABLE_ITEM', item: false});
        const expected = false;

        expect(actual).toEqual(expected);
    });

    it('should return false on itemDisabled', () => {
        const actual = itemDisabled(undefined, {type: 'DUMMY'});
        const expected = true;

        expect(actual).toEqual(expected);
    });

    it('should return item on itemFetchSucceeded', () => {
        const item = {a: 1, b: 2, c: 3};
        const actual = itemFetchSucceeded(undefined, {type: 'ITEM_FETCH_SUCCESS', item});
        const expected = item;

        expect(actual).toEqual(expected);
    });

    it('should return item on itemFetchSucceeded', () => {
        const actual = itemFetchSucceeded(undefined, {type: 'DUMMY'});
        const expected = null;

        expect(actual).toEqual(expected);
    });

    it('should return item on itemStatus', () => {
        const item = {a: 1, b: 2, c: 3};
        const actual = itemStatus(undefined, {type: 'ITEM_OPERATION_FAIL', item});
        const expected = item;

        expect(actual).toEqual(expected);
    });

    it('should return item on itemStatus', () => {
        const actual = itemStatus(undefined, {type: 'DUMMY'});
        const expected = null;

        expect(actual).toEqual(expected);
    });

    it('should return item on itemSearchFetchSucceeded', () => {
        const item = {a: 1, b: 2, c: 3};
        const actual = itemSearchFetchSucceeded(undefined, {type: 'ITEM_SEARCH_FETCH_SUCCESS', item});
        const expected = item;

        expect(actual).toEqual(expected);
    });

    it('should return item on itemSearchFetchSucceeded', () => {
        const actual = itemSearchFetchSucceeded(undefined, {type: 'DUMMY'});
        const expected = null;

        expect(actual).toEqual(expected);
    });

    it('should return item on itemCUDStatusChange', () => {
        const actual = itemCUDStatusChange(undefined, {type: 'DUMMY'});
        const expected = {succeeded: false};

        expect(actual).toEqual(expected);
    });

    it('should return item on itemCUDStatusChange', () => {
        const message = 'Create success';
        const actual = itemCUDStatusChange(undefined, {type: 'CREATE_SUCCESS', message});
        const expected = {
            succeeded: true,
            message: message
        };

        expect(actual).toEqual(expected);
    });

    it('should return item on itemCUDStatusChange', () => {
        const message = 'Delete success';
        const actual = itemCUDStatusChange(undefined, {type: 'DELETE_SUCCESS', message});
        const expected = {
            succeeded: true,
            deleteSucceeded: true,
            message: message
        };

        expect(actual).toEqual(expected);
    });

    it('should return item on itemCUDStatusChange', () => {
        const actual = itemCUDStatusChange(undefined, {type: 'CLOSE_MESSAGE'});
        const expected = {
            succeeded: false
        };

        expect(actual).toEqual(expected);
    });
});
