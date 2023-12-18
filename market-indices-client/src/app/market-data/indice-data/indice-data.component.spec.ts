import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceDataComponent } from './indice-data.component';

describe('IndiceDataComponent', () => {
  let component: IndiceDataComponent;
  let fixture: ComponentFixture<IndiceDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiceDataComponent]
    });
    fixture = TestBed.createComponent(IndiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
