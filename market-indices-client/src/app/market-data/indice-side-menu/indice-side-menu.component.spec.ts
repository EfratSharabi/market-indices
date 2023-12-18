import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceSideMenuComponent } from './indice-side-menu.component';

describe('IndiceSideMenuComponent', () => {
  let component: IndiceSideMenuComponent;
  let fixture: ComponentFixture<IndiceSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiceSideMenuComponent]
    });
    fixture = TestBed.createComponent(IndiceSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
