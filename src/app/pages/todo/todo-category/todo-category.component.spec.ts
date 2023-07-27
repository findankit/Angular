import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCategoryComponent } from './todo-category.component';

describe('TodoCategoryComponent', () => {
  let component: TodoCategoryComponent;
  let fixture: ComponentFixture<TodoCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCategoryComponent]
    });
    fixture = TestBed.createComponent(TodoCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
