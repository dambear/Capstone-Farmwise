import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfarmerComponent } from './addfarmer.component';

describe('AddfarmerComponent', () => {
  let component: AddfarmerComponent;
  let fixture: ComponentFixture<AddfarmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfarmerComponent]
    });
    fixture = TestBed.createComponent(AddfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
