import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[] = [];
  @Output() toggleTodoEvent = new EventEmitter<number>();
  @Output() removeTodoEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onToggleDone(id: number): void {
    this.toggleTodoEvent.emit(id);
  }

  onRemove(id: number): void {
    this.removeTodoEvent.emit(id);
  }
}
