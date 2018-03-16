import expect from 'expect';
import ajaxStatusReducer from './ajaxStatusReducer';
import * as actions from '../actions/ajaxStatusActions';

describe('Ajax Status Reducer', () => {
  it('should pass', () => {
    // arrange
    const initialState = [
      {ajaxCallsInProgress: 1}
    ];

    const success = 'TRUE';
    const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";

    //action
    const action = actions.beginAjaxCall();
    const reducer = ajaxStatusReducer.ajaxStatusReducer(initialState, action);
    //assert
    expect(reducer).toEqual(2);
    //expect(newState[0].title).toEqual('A');
  });
});