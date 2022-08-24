import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from '../todo';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let native: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
    component.toggleTodoEvent.subscribe((v) => {
      expect(v).toBe(todo.id);
    });

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

  it('should remove', () => {
    const todo: Todo = { id: 1, isDone: true, text: 'some-text' };
    spyOn(component, 'onRemove');

    const button = native.querySelector('button')!;

    component.removeTodoEvent.subscribe((v) => {
      expect(v).toBe(todo.id);
    });

    button.click();

    expect(component.onRemove).toHaveBeenCalled();
  });
});
