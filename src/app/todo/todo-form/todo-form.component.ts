import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodoStore } from '../todo.models';
import { addTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  constructor(private store: Store<TodoStore>) {}

  todoForm = new FormGroup({ text: new FormControl() });

  onSubmit(): void {
    this.store.dispatch(
      addTodo({
        todo: { id: Date.now(), text: this.todoForm.value.text, isDone: false },
      })
    );
    this.todoForm.setValue({ text: '' });
  }
}
