import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDoseComponent } from './form-dose.component';

describe('FormDoseComponent', () => {
  let component: FormDoseComponent;
  let fixture: ComponentFixture<FormDoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDoseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
