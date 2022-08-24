import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() addTodoEvent = new EventEmitter<Todo>();

  todoForm = new FormGroup({
    text: new FormControl(),
  });

  onSubmit(): void {
    this.addTodoEvent.emit({
      text: this.todoForm.value.text,
      id: Date.now(),
      isDone: false,
    });
    this.todoForm.setValue({ text: '' });
  }

  ngOnInit(): void {}
}
