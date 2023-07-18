import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefarmerComponent } from './updatefarmer.component';

describe('UpdatefarmerComponent', () => {
  let component: UpdatefarmerComponent;
  let fixture: ComponentFixture<UpdatefarmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatefarmerComponent]
    });
    fixture = TestBed.createComponent(UpdatefarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
