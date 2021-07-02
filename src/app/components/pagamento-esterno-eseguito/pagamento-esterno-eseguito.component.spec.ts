import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoEsternoEseguitoComponent } from './pagamento-esterno-eseguito.component';

describe('PagamentoEsternoEseguitoComponent', () => {
  let component: PagamentoEsternoEseguitoComponent;
  let fixture: ComponentFixture<PagamentoEsternoEseguitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoEsternoEseguitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoEsternoEseguitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
