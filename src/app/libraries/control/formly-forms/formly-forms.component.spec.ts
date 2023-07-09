import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFormsComponent } from './formly-forms.component';

describe('FormlyFormsComponent', () => {
  let component: FormlyFormsComponent;
  let fixture: ComponentFixture<FormlyFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
