import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocalStorageService } from './localstorage.service';
import { TodoStore } from './todo.models';
import { setTodos } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(
    private store: Store<TodoStore>,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const todos = this.localStorageService.getTodosFromLocalStorage();
    this.store.dispatch(setTodos({ todos }));
    this.store.subscribe((v) => {
      this.localStorageService.setTodosToLocalStorage(v.todos);
    });
  }
}
