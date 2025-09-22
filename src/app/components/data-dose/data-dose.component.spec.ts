import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDoseComponent } from './data-dose.component';

describe('DataDoseComponent', () => {
  let component: DataDoseComponent;
  let fixture: ComponentFixture<DataDoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDoseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
