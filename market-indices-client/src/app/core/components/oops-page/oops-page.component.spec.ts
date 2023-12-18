import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsPageComponent } from './oops-page.component';

describe('OopsPageComponent', () => {
  let component: OopsPageComponent;
  let fixture: ComponentFixture<OopsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OopsPageComponent]
    });
    fixture = TestBed.createComponent(OopsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
