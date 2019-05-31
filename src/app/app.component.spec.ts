import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {Store, StoreModule} from "@ngrx/store";
import {combineReducer} from "./store/reducers/todoReducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

describe('AppComponent', () => {
  let component: AppComponent;
  let toDoComponent: TodoListComponent;
  let fixture: ComponentFixture<AppComponent>;
  let toDoFixture: ComponentFixture<TodoListComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(combineReducer),
        StoreDevtoolsModule
      ],
      declarations: [
        AppComponent,
        TodoListComponent
      ],
      providers: [Store]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    toDoFixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    toDoComponent = toDoFixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('my-app');
  });

  it('should select element', () => {
    let nativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    toDoComponent.selectItem(1);
    fixture.detectChanges();
    let listElement = nativeElement.querySelectorAll('li')[1];
    expect(listElement.className).toEqual('selected');
  })
});
