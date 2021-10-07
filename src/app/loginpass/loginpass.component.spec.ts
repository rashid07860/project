import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpassComponent } from './loginpass.component';

describe('LoginpassComponent', () => {
  let component: LoginpassComponent;
  let fixture: ComponentFixture<LoginpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
