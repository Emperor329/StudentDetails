import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNumbersComponent } from './add-numbers.component';

describe('AddnumbersComponent', () => {
  let component: AddNumbersComponent;
  let fixture: ComponentFixture<AddNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
