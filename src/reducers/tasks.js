import * as types from '../constains/ActionsTypes';

const initialState = [];

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    default:
      return state;
  }
}

export default tasks;