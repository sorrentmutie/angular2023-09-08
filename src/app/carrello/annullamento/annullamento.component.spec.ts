import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnullamentoComponent } from './annullamento.component';

describe('AnnullamentoComponent', () => {
  let component: AnnullamentoComponent;
  let fixture: ComponentFixture<AnnullamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnullamentoComponent]
    });
    fixture = TestBed.createComponent(AnnullamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
