import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let native: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [BrowserModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    native = fixture.nativeElement;
  });

  it('should clear input field after submit', () => {
    const text = 'some-text';
    component.todoForm.setValue({ text });
    expect(component.todoForm.value.text).toBe(text);
    component.onSubmit();
    expect(component.todoForm.value.text).toBe('');
  });

  it('should emit value on submit', () => {
    const text = 'some-text';

    component.addTodoEvent.subscribe((v) => {
      expect(v.text).toBe(text);
    });
    component.todoForm.setValue({ text });
    component.onSubmit();

    expect(component.todoForm.value.text).toBe('');
  });

  it('button should disabled if input clean', () => {
    const button = native.querySelector('button')!;
    button.click();
    spyOn(component, 'onSubmit');
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
