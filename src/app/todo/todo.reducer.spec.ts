import { addTodo, removeTodo, setTodos, toggleDone } from './todo.actions';
import { Todo } from './todo.models';
import { todoReducer } from './todo.reducer';

describe('Todo Reducer', () => {
  it('should add todo', () => {
    const todo: Todo = { id: 1, isDone: true, text: 'some' };
    expect(todoReducer(undefined, addTodo({ todo }))).toEqual([todo]);
  });

  it('should remove todo', () => {
    const removedTodoId = 1;
    const initialState: Todo[] = [
      { id: removedTodoId, isDone: false, text: 'some' },
    ];
    expect(
      todoReducer(initialState, removeTodo({ todoId: removedTodoId }))
    ).toEqual([]);
  });

  it('should toggle todo done', () => {
    const todo: Todo = { id: 1, isDone: false, text: 'some' };
    const initialState = [todo];
    expect(todoReducer(initialState, toggleDone({ todoId: todo.id }))).toEqual([
      { ...todo, isDone: !todo.isDone },
    ]);
  });

  it('should set todos', () => {
    const todos: Todo[] = [{ id: 1, isDone: false, text: 'some' }];
    expect(todoReducer(undefined, setTodos({ todos }))).toEqual(todos);
  });
});
