import { LocalStorageService } from './localstorage.service';
import { Todo } from './todo.models';

describe('localStorage service', () => {
  let service: LocalStorageService;
  beforeEach(() => {
    service = new LocalStorageService();
  });

  it('should get empty array if localStoarge clean', () => {
    const localStorageGetItem = spyOn(localStorage, 'getItem');
    localStorageGetItem.and.returnValue(null);
    expect(service.getTodosFromLocalStorage()).toEqual([]);
  });

  it('should get not empty array if localStoarge filled', () => {
    const todos: Todo[] = [{ id: 1, isDone: true, text: 'some-text' }];
    const localStorageGetItem = spyOn(localStorage, 'getItem');
    localStorageGetItem.and.returnValue(JSON.stringify(todos));
    expect(service.getTodosFromLocalStorage()).toEqual(todos);
  });

  it('should set todos to localStoarge', () => {
    const todos: Todo[] = [{ id: 1, isDone: true, text: 'some-text' }];
    const localStorageSetItem = spyOn(localStorage, 'setItem');
    service.setTodosToLocalStorage(todos);
    expect(localStorageSetItem).toHaveBeenCalledWith(
      'todos',
      JSON.stringify(todos)
    );
  });
});
