import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceProminentFluctsComponent } from './indice-prominent-flucts.component';

describe('IndiceProminentFluctsComponent', () => {
  let component: IndiceProminentFluctsComponent;
  let fixture: ComponentFixture<IndiceProminentFluctsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiceProminentFluctsComponent]
    });
    fixture = TestBed.createComponent(IndiceProminentFluctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
