import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListComponent} from './todo-list.component';
import {Store, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {combineReducer} from "../../store/reducers/todoReducer";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers:[Store],
      imports: [ StoreModule.forRoot(combineReducer),
        StoreDevtoolsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select', () => {

    let nativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    console.log(nativeElement);
    //component.selectItem(1);
    //console.log(component.items);
    //expect(component.items[1].selected).toBeTruthy();
    //console.log(de.query(By.css('ul')));
    // expect(component).toBeTruthy();
  });
});
