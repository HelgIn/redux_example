import {Action} from '@ngrx/store';

export class ToDoAction implements Action {

  constructor(type: string, payload: number) {
    this.type = type;
    this.payload = payload;
  }

  type: string;
  payload: any;
}

export const GET_ITEM = 'GET_ITEM';
export const SELECT_ITEM = 'SELECT_ITEM';
