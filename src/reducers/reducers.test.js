import expect from 'expect';
import ajaxStatusReducer from './ajaxStatusReducer';
import * as actions from '../actions/userActions';

describe('Ajax Status Reducer', () => {
  it('should pass', () => {
    // arrange
    const initialState = [
      {ajaxCallsInProgress: 0},
      {ajaxCallsInProgress: 1},
      {ajaxCallsInProgress: 2}
    ];

    const success = 'TRUE';

    //action
    const action = beginAjaxCall();
    reducer = actions.actionTypeEndsInSuccess(LOAD_USERS_SUCCESS);
    //assert
    expect(reducer.length).toEqual(4);
    //expect(newState[0].title).toEqual('A');
  });

  it('should pass', () => {
    // arrange
    const currentState = 2;

    const success = 'TRUE';

    //action
    const action = actions.ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action);
    //assert
    expect(action.length).toEqual(4);
    //expect(newState[0].title).toEqual('A');
    //expect(newState[1].title).toEqual('B');
    //expect(newState[2].title).toEqual('C');
  });
});