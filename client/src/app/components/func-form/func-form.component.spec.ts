import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncFormComponent } from './func-form.component';

describe('FuncFormComponent', () => {
  let component: FuncFormComponent;
  let fixture: ComponentFixture<FuncFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
