import { Injectable } from '@angular/core';
import { Todo } from './todo.models';

@Injectable()
export class LocalStorageService {
  getTodosFromLocalStorage(): Todo[] {
    const todos = localStorage.getItem('todos');
    if (todos) {
      return JSON.parse(todos);
    }
    return [];
  }

  setTodosToLocalStorage(todo: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify(todo));
  }
}
