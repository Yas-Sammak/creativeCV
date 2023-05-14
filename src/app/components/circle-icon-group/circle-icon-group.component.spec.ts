import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleIconGroupComponent } from './circle-icon-group.component';

describe('CircleIconGroupComponent', () => {
  let component: CircleIconGroupComponent;
  let fixture: ComponentFixture<CircleIconGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleIconGroupComponent]
    });
    fixture = TestBed.createComponent(CircleIconGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
