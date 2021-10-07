import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogviewComponent } from './dailogview.component';

describe('DailogviewComponent', () => {
  let component: DailogviewComponent;
  let fixture: ComponentFixture<DailogviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailogviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailogviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
