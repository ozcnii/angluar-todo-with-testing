import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {}

  onAddTodo(todo: Todo): void {
    this.todos.push(todo);
    this.setTodosToLocalStorage(this.todos);
  }

  onRemove(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.setTodosToLocalStorage(this.todos);
  }

  onToggleDone(id: number): void {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    this.setTodosToLocalStorage(this.todos);
  }

  ngOnInit(): void {
    this.todos = this.getTodosFromLocalStorage();
  }

  getTodosFromLocalStorage(): Todo[] {
    const todos = localStorage.getItem('todos');
    if (todos) {
      return JSON.parse(todos) as Todo[];
    }
    return [];
  }

  setTodosToLocalStorage(todo: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify(todo));
  }
}
