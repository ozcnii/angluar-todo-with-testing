import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.models';

export const addTodo = createAction('[Todo] addTodo', props<{ todo: Todo }>());

export const setTodos = createAction(
  '[Todo] setTodos',
  props<{ todos: Todo[] }>()
);

export const removeTodo = createAction(
  '[Todo] removeTodo',
  props<{ todoId: number }>()
);

export const toggleDone = createAction(
  '[Todo] toggleDone',
  props<{ todoId: number }>()
);
