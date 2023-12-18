import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCompositionComponent } from './index-composition.component';

describe('IndexCompositionComponent', () => {
  let component: IndexCompositionComponent;
  let fixture: ComponentFixture<IndexCompositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexCompositionComponent]
    });
    fixture = TestBed.createComponent(IndexCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
