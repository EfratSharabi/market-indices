import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCompositionGridComponent } from './index-composition-grid.component';

describe('IndexCompositionGridComponent', () => {
  let component: IndexCompositionGridComponent;
  let fixture: ComponentFixture<IndexCompositionGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexCompositionGridComponent]
    });
    fixture = TestBed.createComponent(IndexCompositionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
