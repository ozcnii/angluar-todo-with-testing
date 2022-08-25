import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo, TodoStore } from '../todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<TodoStore>) {
    this.todos$ = store.select('todos');
  }
}
