export interface Todo {
  id: number;
  isDone: boolean;
  text: string;
}

export interface TodoStore {
  todos: Todo[];
}
