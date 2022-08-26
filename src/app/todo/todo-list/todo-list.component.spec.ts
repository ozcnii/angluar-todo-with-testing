import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Todo } from '../todo.models';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let native: HTMLElement;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [provideMockStore({ initialState: [] })],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockStore = TestBed.inject(MockStore);
    native = fixture.nativeElement;
  });

  it('should render todos', () => {
    const todos: Todo[] = [
      {
        id: 1,
        isDone: true,
        text: 'some-text',
      },
      {
        id: 1,
        isDone: true,
        text: 'some-text',
      },
    ];

    mockStore.setState({ todos });

    fixture.detectChanges();
    const list = native.querySelectorAll('li');
    expect(list.length).toBe(todos.length);
  });

  it('should`t render todos', () => {
    const todos: Todo[] = [];
    mockStore.setState({ todos });

    fixture.detectChanges();
    const list = native.querySelectorAll('li');
    expect(list.length).toBe(todos.length);

    const h3 = native.querySelector('h3')!;
    expect(h3.textContent).toContain('fount 0 todos');
  });
});
