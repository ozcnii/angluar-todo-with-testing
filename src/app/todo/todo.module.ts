import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodoListComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [TodoComponent],
})
export class TodoModule {}
