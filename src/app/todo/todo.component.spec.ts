import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from './todo.models';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let native: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    native = fixture.nativeElement;
  });

  it('should create', () => {
    const form = native.querySelector('app-todo-form');
    const list = native.querySelector('app-todo-list');
    const h2 = native.querySelector('h2')!;

    expect(h2.textContent).toContain('Home page');
    expect(list).toBeTruthy();
    expect(form).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should get todos on init', () => {
    const getTodosFromLocalStorageSpy = spyOn(
      component,
      'getTodosFromLocalStorage'
    );
    getTodosFromLocalStorageSpy.and.returnValue([]);

    component.ngOnInit();

    expect(getTodosFromLocalStorageSpy).toHaveBeenCalled();
    expect(component.todos.length).toBe(0);
  });

  it('should add todo', () => {
    component.todos = [];

    const todo: Todo = {
      id: 1,
      isDone: true,
      text: 'some-text',
    };

    component.onAddTodo(todo);

    expect(component.todos.length).toBe(1);
    expect(component.todos).toContain(todo);
  });

  it('should remove todo', () => {
    const todo: Todo = {
      id: 1,
      isDone: true,
      text: 'some-text',
    };

    const todos: Todo[] = [todo];

    component.todos = todos;
    component.onRemove(todo.id);

    expect(component.todos.length).toBe(todos.length - 1);
  });

  it('should toggle done', () => {
    const isDone = true;

    const todo: Todo = {
      id: 1,
      isDone,
      text: 'some-text',
    };

    const todos: Todo[] = [todo];

    component.todos = todos;
    component.onToggleDone(todo.id);
    expect(component.todos[todos.length - 1].isDone).toBe(!isDone);
  });
});
