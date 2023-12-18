import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceWeeklyDataGraphComponent } from './indice-weekly-data-graph.component';

describe('IndiceWeeklyDataGraphComponent', () => {
  let component: IndiceWeeklyDataGraphComponent;
  let fixture: ComponentFixture<IndiceWeeklyDataGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiceWeeklyDataGraphComponent]
    });
    fixture = TestBed.createComponent(IndiceWeeklyDataGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
