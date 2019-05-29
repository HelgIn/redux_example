import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {createFeatureSelector, Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  items$: Observable<any>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {

    this.items$ = this.store.select('todo');
    this.store.subscribe(item => {
      console.log(item);
    });
  }
}
