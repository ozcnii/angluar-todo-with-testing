import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { addTodo } from '../todo.actions';
import { Todo } from '../todo.models';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let native: HTMLElement;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [BrowserModule, ReactiveFormsModule],
      providers: [provideMockStore({ initialState: [] })],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockStore = TestBed.inject(MockStore);
    native = fixture.nativeElement;
  });

  it('should clear input field after submit', () => {
    const text = 'some-text';
    component.todoForm.setValue({ text });
    expect(component.todoForm.value.text).toBe(text);
    component.onSubmit();
    expect(component.todoForm.value.text).toBe('');
  });

  it('should call dispatch on submit', () => {
    const text = 'some-text';
    const dispatchSpy = spyOn(mockStore, 'dispatch');

    component.todoForm.setValue({ text });
    component.onSubmit();

    expect(dispatchSpy).toHaveBeenCalled();
    expect(component.todoForm.value.text).toBe('');
  });

  it('button should disabled if input clean', () => {
    const button = native.querySelector('button')!;
    const dispatchSpy = spyOn(mockStore, 'dispatch');
    spyOn(component, 'onSubmit');

    button.click();

    expect(dispatchSpy).not.toHaveBeenCalled();
    expect(component.onSubmit).not.toHaveBeenCalled();
  });

  it('button should enabled if input not clean', () => {
    const text = 'some-text';
    const button = native.querySelector('button')!;
    const input = native.querySelector('input')!;
    spyOn(component, 'onSubmit');

    input.value = text;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    button.click();

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
