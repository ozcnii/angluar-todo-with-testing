import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LocalStorageService } from './localstorage.service';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let native: HTMLElement;
  let mockStore: MockStore;
  let mockLocalStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(async () => {
    mockLocalStorageService = jasmine.createSpyObj<LocalStorageService>(
      'LocalStorageService',
      ['getTodosFromLocalStorage', 'setTodosToLocalStorage']
    );

    mockLocalStorageService.getTodosFromLocalStorage.and.returnValue([]);

    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
      providers: [
        provideMockStore({ initialState: [] }),
        { provide: LocalStorageService, useValue: mockLocalStorageService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockStore = TestBed.inject(MockStore);
    native = fixture.nativeElement;
  });

  it('should create', () => {
    const form = native.querySelector('app-todo-form');
    const list = native.querySelector('app-todo-list');
    const h2 = native.querySelector('h2')!;

    expect(h2.textContent).toContain('Home page');
    expect(list).toBeTruthy();
    expect(form).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should get todos on init', () => {
    component.ngOnInit();
    expect(mockLocalStorageService.getTodosFromLocalStorage).toHaveBeenCalled();

    mockStore.subscribe((v) => {
      expect(v).toEqual([]);
    });

    expect(mockLocalStorageService.setTodosToLocalStorage).toHaveBeenCalled();
  });
});
