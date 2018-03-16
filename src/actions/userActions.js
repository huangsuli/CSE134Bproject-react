import mockUserApi from '../api/mockUserApi';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}

export function loadUsers() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return mockUserApi.getAllUsers().then(users => {
            dispatch(loadUsersSuccess(users));
        }).catch(error => {
            throw(error);
        });
    }
}