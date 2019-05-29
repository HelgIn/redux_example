import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {combineReducer} from './store/reducers/todoReducer';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(combineReducer),
    StoreDevtoolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
