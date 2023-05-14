import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaGroupComponent } from './social-media-group.component';

describe('SocialMediaGroupComponent', () => {
  let component: SocialMediaGroupComponent;
  let fixture: ComponentFixture<SocialMediaGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaGroupComponent]
    });
    fixture = TestBed.createComponent(SocialMediaGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
