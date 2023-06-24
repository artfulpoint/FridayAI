import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuityComponent } from './continuity.component';

describe('ContinuityComponent', () => {
  let component: ContinuityComponent;
  let fixture: ComponentFixture<ContinuityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinuityComponent]
    });
    fixture = TestBed.createComponent(ContinuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
