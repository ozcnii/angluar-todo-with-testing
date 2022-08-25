import { createReducer, on } from '@ngrx/store';
import { Todo } from './todo.models';
import { addTodo, removeTodo, setTodos, toggleDone } from './todo.actions';

const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => [...state, todo]),
  on(removeTodo, (state, { todoId }) =>
    state.filter((todo) => todo.id !== todoId)
  ),
  on(toggleDone, (state, { todoId }) =>
    state.map((todo) => {
      if (todo.id === todoId) {
        return {
          id: todo.id,
          isDone: !todo.isDone,
          text: todo.text,
        };
      }
      return todo;
    })
  ),
  on(setTodos, (_state, { todos }) => todos)
);
