import { combineReducers } from 'redux';
import { itemListingSucceeded,
    itemFetchSucceeded,
    itemCUDStatusChange,
    itemDisabled,
    dismissMessageDone,
    itemSearchFetchSucceeded,
    authSuccess,
    itemStatus } from './baseReducer';

export default combineReducers({ itemListingSucceeded,
    itemFetchSucceeded,
    itemCUDStatusChange,
    itemDisabled,
    dismissMessageDone,
    itemSearchFetchSucceeded,
    authSuccess,
    itemStatus });
