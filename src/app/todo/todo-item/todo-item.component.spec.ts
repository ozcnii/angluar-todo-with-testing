import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { removeTodo, toggleDone } from '../todo.actions';
import { Todo } from '../todo.models';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let native: HTMLElement;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
      providers: [provideMockStore({ initialState: [] })],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockStore = TestBed.inject(MockStore);
    native = fixture.nativeElement;
  });

  it('should render todo from input', () => {
    const todo: Todo = { id: 1, isDone: true, text: 'some-text' };
    component.todo = todo;

    fixture.detectChanges();
    const input = native.querySelector('input')!;
    const span = native.querySelector('span')!;

    expect(input.checked).toBe(todo.isDone);
    expect(span.textContent).toBe(todo.text);
  });

  it('should toggle done', () => {
    const todo: Todo = { id: 1, isDone: true, text: 'some-text' };
    spyOn(component, 'onToggleDone');

    component.todo = todo;
    fixture.detectChanges();

    const input = native.querySelector('input')!;

    input.click();
    todo.isDone = !todo.isDone;
    component.todo = todo;
    fixture.detectChanges();

    expect(component.onToggleDone).toHaveBeenCalled();
    expect(input.checked).toBe(todo.isDone);
  });

  it('should call dispatch on toggle done ', () => {
    const todo: Todo = { id: 1, isDone: true, text: 'some-text' };
    const dispatchSpy = spyOn(mockStore, 'dispatch');

    component.todo = todo;
    fixture.detectChanges();

    const input = native.querySelector('input')!;

    input.click();
    todo.isDone = !todo.isDone;
    component.todo = todo;
    fixture.detectChanges();

    expect(input.checked).toBe(todo.isDone);
    expect(dispatchSpy).toHaveBeenCalledWith(toggleDone({ todoId: todo.id }));
  });

  it('should remove', () => {
    spyOn(component, 'onRemove');

    const button = native.querySelector('button')!;
    button.click();

    expect(component.onRemove).toHaveBeenCalled();
  });

  it('should call dispatch on remove', () => {
    const todo: Todo = { id: 1, isDone: true, text: 'some-text' };

    component.todo = todo;

    const dispatchSpy = spyOn(mockStore, 'dispatch');

    const button = native.querySelector('button')!;
    button.click();

    expect(dispatchSpy).toHaveBeenCalledWith(removeTodo({ todoId: todo.id }));
  });
});
