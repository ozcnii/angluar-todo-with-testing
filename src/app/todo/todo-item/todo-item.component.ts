import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo, TodoStore } from '../todo.models';
import { removeTodo, toggleDone } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo = { id: 0, isDone: false, text: '_init' };

  constructor(private store: Store<TodoStore>) {}

  onToggleDone(todoId: number): void {
    this.store.dispatch(toggleDone({ todoId }));
  }

  onRemove(todoId: number): void {
    this.store.dispatch(removeTodo({ todoId }));
  }
}
