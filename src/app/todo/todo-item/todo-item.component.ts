import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = { id: 0, isDone: false, text: '_init' };
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
