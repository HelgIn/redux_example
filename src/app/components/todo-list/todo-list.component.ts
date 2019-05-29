import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {SELECT_ITEM, ToDoAction} from '../../store/actions/Action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input()
  items: any[];

  ngOnInit(): void {
  }

  constructor(private store: Store<any>) {
  }

  selectItem(index) {
    this.store.dispatch(new ToDoAction(SELECT_ITEM, index));
  }

}
