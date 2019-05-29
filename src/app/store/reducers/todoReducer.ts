import {GET_ITEM, SELECT_ITEM, ToDoAction} from '../actions/Action';
import {initial} from '../initialState';

export function ToDoReducer(state = initial, action: ToDoAction) {
  switch (action.type) {
    case GET_ITEM: {
      return [...state];
    }
    case SELECT_ITEM : {
      console.log('ToDoReducer');
      state.forEach(s => s.selected = false);
      state[action.payload].selected = true;
      return [...state];
    }
    default:
      return state;
  }
}

export const combineReducer = {
  todo: ToDoReducer
};
